import React from "react";
import { ImAttachment } from "react-icons/im";
import { RiMailSendFill } from "react-icons/ri";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import IsPhone from "validator/lib/isMobilePhone";
import styles from "../styles/components/Form.module.scss";
import Loader from "./Loader";

/**
 * Convert long number of bytes to short formatted number
 * @license Unlicense SO Community
 * @param {numer} bytes
 * @param {number} decimals
 */
const formatBytes: (bytes: number, decimals?: number) => string = (
  bytes,
  decimals
) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

export default class Form extends React.Component {
  state = {
    loading: false,
    success: false,
    error: false,
    errorMessageText: "",
  };

  sendButton = React.createRef<HTMLButtonElement>();
  formRefs = {
    name: React.createRef<HTMLInputElement>(),
    email: React.createRef<HTMLInputElement>(),
    phone: React.createRef<HTMLInputElement>(),
    message: React.createRef<HTMLTextAreaElement>(),
  };

  formData = {};
  toSend: FormData;

  filesRef = React.createRef<HTMLInputElement>();
  files: { name: string; size: string; type: string; id: string }[] = [];

  invalid = Object.entries(this.formRefs)
    .map(([o]) => ({ [o]: true }))
    .reduce((p, c) => Object.assign(p, c), {});

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

  fileHandler = (e) => {
    for (let file = 0; file < e.target.files.length; file++) {
      let id = (Math.random() * 10e10).toString(36);
      const { name, size, type } = e.target.files[file];
      this.files.push({ name, size, type, id });
      this.toSend.append(id, e.target.files[file], name);
    }
    this.setState({});
  };

  componentDidMount() {
    // can't define FormData on server
    this.toSend = new FormData();
    this.sendButton.current.disabled = true;
    for (const key of Object.keys(this.formRefs)) {
      const el: HTMLInputElement | HTMLTextAreaElement = this.formRefs[key]
        .current;

      el.onchange = (e) => {
        // @ts-ignore
        const { value } = e.target;

        this.formData[key] = value;

        if (["email", "phone"].includes(key)) {
          if (
            !isEmpty(String(this.formData["phone"]) || "") ||
            !isEmpty(String(this.formData["email"]) || "")
          ) {
            this.invalid.phone = false;
            this.invalid.email = false;
          } else {
            this.invalid.phone = true;
            this.invalid.email = true;
          }
        }

        if (key === "name") {
          const invalid = !value || value.length < 3;
          this.invalid.name = !!invalid;
        } else if (key === "email") {
          const invalid = !value || !isEmail(value);
          this.invalid.email = !!invalid;
        } else if (key === "phone") {
          const invalid = !value || !IsPhone(value);
          this.invalid.phone = !!invalid;
        } else if (key === "message") {
          const invalid = !value || isEmpty(String(value || ""));
          this.invalid.message = !!invalid;
        }

        if (this.invalid[key]) {
          el.className = `${el.className} is-invalid`;
        } else {
          el.className = el.className.replace(/is-invalid/g, "");
        }

        this.sendButton.current.disabled = !(
          Object.entries(this.formData).filter(([o, v]) => !!v).length > 2 &&
          Object.entries(this.invalid).filter(([o, v]) => !!v).length === 0
        );
      };
    }
  }

  preSubmit = () => {
    this.setState({ loading: true });
  };

  onSubmit = (e) => {
    e.preventDefault();

    for (const [key, value] of Object.entries<string | Blob>(this.formData)) {
      this.toSend.append(key, value);
    }

    this.setState(
      {
        loading: true,
      },
      () => {
        fetch("/api/kontakt", {
          method: "POST",
          body: this.toSend,
        })
          .then((res) => res.json())
          .then((res) => {
            if (!res.success) throw "Internal Server Error";
            this.setState({ success: true, loading: false });
          })
          .catch((err) => {
            console.error(err);
            this.setState({
              error: true,
              loading: false,
            });
          });
      }
    );
  };

  render() {
    return (
      <>
        {this.state.loading && <Loader />}
        <div
          id={styles.Form}
          style={{ display: this.state.loading ? "none" : "" }}
        >
          <div className={`row ${styles.header}`} data-aos="fade-up">
            <h1>Skontaktuj się z nami!</h1>
          </div>
          {this.state.success ? (
            <div className={`row ${styles.success}`}>
              <h5>Dziękujemy! Wkrótce się odezwiemy.</h5>
            </div>
          ) : (
            <>
              <div className="form-floating mb-3">
                <input
                  ref={this.formRefs.name}
                  data-aos="fade up"
                  type="text"
                  className="form-control"
                  placeholder="Imię i Nazwisko"
                  autoCapitalize="true"
                  autoComplete="name"
                />
                <label>Imię i Nazwisko</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  ref={this.formRefs.email}
                  data-aos="fade up"
                  type="email"
                  className="form-control"
                  placeholder="Adres E-Mail"
                  autoComplete="email"
                  autoCorrect="false"
                  autoCapitalize="false"
                />
                <label>Adres E-Mail</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  ref={this.formRefs.phone}
                  data-aos="fade up"
                  type="tel"
                  className="form-control"
                  placeholder="Numer Telefonu"
                  autoComplete="phone"
                />
                <label>Numer Telefonu</label>
              </div>
              <div className="form-floating">
                <textarea
                  onChange={(e) => {
                    // @ts-ignore
                    e.target.onchange(e);
                  }}
                  data-aos="fade up"
                  ref={this.formRefs.message}
                  style={{ height: "100px" }}
                  className="form-control"
                  placeholder="Wiadomość"
                  autoComplete="off"
                  autoCapitalize="true"
                  autoCorrect="true"
                />
                <label>Wiadomość</label>
              </div>

              {this.state.error && (
                <div className={styles["error-message"]}>
                  <div className={styles["e-mark"]}>!</div>
                  <div className={styles.message}>Coś poszło nie tak!</div>
                  {this.state.errorMessageText ? (
                    <div className={styles.message}>
                      {this.state.errorMessageText}
                    </div>
                  ) : null}
                </div>
              )}

              <div className={`row ${styles.buttons}`}>
                <button
                  data-aos="fade-up"
                  onClick={() => this.filesRef.current.click()}
                >
                  <span>
                    Załącz Plik
                    <ImAttachment />
                  </span>
                </button>
                <button
                  data-aos="fade-up"
                  type="submit"
                  ref={this.sendButton}
                  onClick={this.onSubmit}
                >
                  <span>
                    Wyślij <RiMailSendFill />
                  </span>
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
                    <div
                      key={file.name}
                      className={`row no-gutters ${styles["single-file"]}`}
                    >
                      <div className="col">{file.name}</div>
                      <div className="col-2">
                        {formatBytes(
                          parseInt(file.size) || parseFloat(file.size)
                        )}
                      </div>
                      <div className="col-2">
                        <button
                          id={file.id}
                          className={styles["remove-button"]}
                          onClick={this.removeFile}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </>
    );
  }
}
