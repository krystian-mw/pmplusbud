import { Component, createRef, createElement } from "react";

import { ImAttachment } from "react-icons/im";
import { RiMailSendFill } from "react-icons/ri";

import Loader from "./Loader";

import styles from "../styles/components/Form.module.scss";

const Fields = {
  Name: {
    placeholder: "Imię i Nazwisko",
    match: /^[a-zA-Z]+[\s|-]?[a-zA-Z]+[\s|-]?[a-zA-Z]+$/,
    required: true,
    element: "input",
    type: "text",
    autoComplete: "name",
  },
  Email: {
    placeholder: "Adres E-Mail",
    match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    required: false,
    element: "input",
    type: "email",
    autoComplete: "email",
  },
  Phone: {
    placeholder: "Numer telefonu",
    match: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
    required: false,
    element: "input",
    type: "tel",
    autoComplete: "tel",
  },
  Message: {
    match: /./,
    placeholder: "Wiadomość ...",
    required: true,
    element: "textarea",
    type: null,
    autoComplete: null,
  },
};

const FieldKeys = Object.keys(Fields);

/**
 * Convert long number of bytes to short formatted number
 * @license Unlicense SO Community
 * @param {numer} bytes
 * @param {number} decimals
 */
const formatBytes = (bytes, decimals) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      loaderVisible: false,
      formVisible: true,
      errorMessage: false,
      errorMessageText: false,
      success: false,
    };

    FieldKeys.forEach((field) => {
      this.state[`field${field}`] = "";
      this.state[`validate${field}`] = true;
      this.state[`active${field}`] = false;
    });

    this.files = [];
    this.filesRef = createRef();
  }

  componentDidMount() {
    // can't define FormData on server
    this.toSend = new FormData();
  }

  updateField = (e) => {
    this.validateOnInput(e);
    this.setState({
      [`field${e.target.name}`]: e.target.value,
      errorMessage: false,
    });
  };

  onLabelFocus = (e) => {
    this.setState({
      [`active${e.target.name}`]: true,
    });
  };

  onLabelBlur = (e) => {
    this.setState({
      [`active${e.target.name}`]: false,
    });
  };

  preSubmit = () => {
    this.setState({ loaderVisible: true, formVisible: false });
  };

  Submit = async (e) => {
    e.preventDefault()
    this.preSubmit();
    try {
      FieldKeys.forEach((field) => {
        if (!this.validate(field, this.state[`field${field}`]))
          throw `Sprawdź ${field}`;
      });

      FieldKeys.forEach((field) =>
        this.toSend.append(field, this.state[`field${field}`])
      );

      const req = await fetch("/api/kontakt", {
        method: "POST",
        body: this.toSend,
      });
      const data = await req.json();

      if (!data.success) throw "Nie mogliśmy otrzymać twojej wiadomości";

      this.setState({
        success: true,
        loaderVisible: false,
        formVisible: false,
      });
    } catch (e) {
      this.setState({
        errorMessage: true,
        errorMessageText: e,
        formVisible: true,
        loaderVisible: false,
      });
    }
  };

  validate = (name, value) => {
    // First check if required, if not and is empty return true
    if (!Fields[name].required && value === "") return true;
    // Then check regex match
    return value.search(Fields[name].match) > -1;
  };

  validateOnInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [`validate${name}`]: this.validate(name, value) });
  };

  fileHandler = (e) => {
    for (let file = 0; file < e.target.files.length; file++) {
      let id = parseInt(Math.random() * 10e10).toString(36);
      const { name, size, type } = e.target.files[file];
      this.files.push({ name, size, type, id });
      this.toSend.append(id, e.target.files[file], name);
    }
    this.setState({});
  };

  removeFile = (e) => {
    const { id } = e.target;
    this.toSend.delete(id);
    this.files.forEach((file, index) => {
      if (file.id === id) {
        this.files.splice(index, 1);
      }
    });
    this.setState({});
  };

  render() {
    return (
      <div id={styles.Form}>
        <div className={`row ${styles.header}`} data-aos="fade-up">
          <h1>Skontaktuj się z nami!</h1>
        </div>
        {this.state.loaderVisible ? <Loader /> : null}
        {this.state.errorMessage ? (
          <div className={styles["error-message"]}>
            <div className={styles["e-mark"]}>!</div>
            <div className={styles.message}>Coś poszło nie tak!</div>
            {this.state.errorMessageText ? (
              <div className={styles.message}>{this.state.errorMessageText}</div>
            ) : null}
          </div>
        ) : null}
        {this.state.success ? (
          <div className={`row ${styles.success}`}>
            <h5>Dziękujemy! Wkrótce się odezwiemy.</h5>
          </div>
        ) : null}
        <form
          className={`${styles['form-wrapper']} ${
            this.state.formVisible ? "" : styles["hide-form"]
          }`}
          onSubmit={this.Submit}
        >
          <div className={`row ${styles.form}`}>
            {FieldKeys.map((field, index) => (
              <div
                key={field}
                className={styles.field}
                data-aos="zoom-in-right"
                data-aos-delay={index * 100}
              >
                <label
                  htmlFor={field}
                  className={
                    (this.state[`active${field}`] ? styles.active + " " : "") +
                    (!this.state[`active${field}`] &&
                    this.state[`field${field}`] !== ""
                      ? styles.hide
                      : "")
                  }
                >
                  {Fields[field].placeholder}
                </label>
                {createElement(Fields[field].element, {
                  id: field,
                  name: field,
                  //   placeholder: Fields[field].placeholder,
                  type: Fields[field].type,
                  autoComplete: Fields[field].autoComplete,
                  onChange: this.updateField,
                  onFocus: this.onLabelFocus,
                  onBlur: this.onLabelBlur,
                  value: this.state[`field${field}`],
                  className: !this.state[`validate${field}`]
                    ? styles["input-error"]
                    : "",
                })}
                {this.state[`validate${field}`] ? null : (
                  <p className={styles.error}>
                    Sprawdż {Fields[field].placeholder} jeszcze raz
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className={`row ${styles.buttons}`}>
            <button
              data-aos="fade-up"
              onClick={() => this.filesRef.current.click()}
            >
              Załącz Plik
              <ImAttachment />
            </button>
            <button data-aos="fade-up" type="submit">
              Wyślij <RiMailSendFill />
            </button>
          </div>
          <div className={`row ${styles.files}`}>
            <input
              type="file"
              ref={this.filesRef}
              onChange={this.fileHandler}
              multiple
            />
            <div className="col">
              {this.files.map((file) => (
                <div key={file.name} className={`row no-gutters ${styles["single-file"]}`}>
                  <div className="col">{file.name}</div>
                  <div className="col-2">{formatBytes(file.size)}</div>
                  <div className="col-2">
                    <button
                      id={file.id}
                      className={style["remove-button"]}
                      onClick={this.removeFile}
                    >
                      X
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
    );
  }
}
