import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import iconQuestion from "@/assets/icons/icon-question.svg";
import styles from "./ContactForm.module.css";

const ContactForm = React.memo(function ContactForm({ data }) {
  const t = useTranslations("ContactForm");

  return (
    <div className={styles.ContactFormWrapper}>
      <div className={styles.ContactForm}>
        <div className={styles.ContactFormTitle}>
          <h2>
            {t("title")
              .split(" ")
              .map((word, index) => {
                let specialWord = ["With", "Future"].includes(word);
                let blueWord = ["Your", "Future", "Partners!"].includes(word);

                return (
                  <React.Fragment key={index}>
                    <span
                      style={
                        blueWord
                          ? { color: "#3C7BF6" }
                          : specialWord
                            ? { color: "#151515" }
                            : {}
                      }
                    >
                      {word}
                    </span>
                    {specialWord && <br />}
                  </React.Fragment>
                );
              })
              .reduce((acc, word, index, array) => {
                if (index < array.length - 1) {
                  return [...acc, word, " "];
                } else {
                  return [...acc, word];
                }
              }, [])}
          </h2>
          <p>{t("description")}</p>
        </div>
        <form className={styles.ContactFormInputs}>
          <div
            className={`${styles.ContactFormInput} ${styles.ContactFormInputHaf}`}
          >
            <Label htmlFor="name" className={styles.ContactFormLabel}>
              {t(data.inputName.title)}
            </Label>
            <Input
              type="text"
              id="name"
              placeholder={t(data.inputName.placeholder)}
            />
          </div>

          <div
            className={`${styles.ContactFormInput} ${styles.ContactFormInputHaf}`}
          >
            <Label htmlFor="employees" className={styles.ContactFormLabel}>
              {t(data.inputEmployees.title)
                .split(/(\(optional\))/gi)
                .map((part, index) =>
                  /\(optional\)/i.test(part) ? (
                    <span key={index} className="font-thin">
                      {part}
                    </span>
                  ) : (
                    part
                  )
                )}
            </Label>

            <TooltipProvider>
              <div>
                <Input
                  type="text"
                  id="employees"
                  placeholder={t(data.inputEmployees.placeholder)}
                  icon={
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button type="button">
                          <Image src={iconQuestion} alt="question" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent
                        style={{
                          backgroundColor: "#fff",
                          color: "#151515",
                          maxWidth: "20em",
                          padding: "1em",
                          border: "1px solid rgba(21, 21, 21, 0.08)",
                        }}
                      >
                        <p>{t(data.inputEmployees.tooltip)}</p>
                      </TooltipContent>
                    </Tooltip>
                  }
                />
              </div>
            </TooltipProvider>
          </div>

          <div
            className={`${styles.ContactFormInput} ${styles.ContactFormInputHaf}`}
          >
            <Label htmlFor="email" className={styles.ContactFormLabel}>
              {t(data.inputEmail.title)}
            </Label>
            <Input
              type="email"
              id="email"
              placeholder={t(data.inputEmail.placeholder)}
            />
          </div>

          <div
            className={`${styles.ContactFormInput} ${styles.ContactFormInputHaf}`}
          >
            <Label htmlFor="phone" className={styles.ContactFormLabel}>
              {t(data.inputPhone.title)}
            </Label>
            <Input
              type="tel"
              id="phone"
              placeholder={t(data.inputPhone.placeholder)}
            />
          </div>

          <div className={`${styles.ContactFormInput}`}>
            <Label htmlFor="dropdown" className={styles.ContactFormLabel}>
              {t(data.inputDropdown.title)}
            </Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder={t(data.inputDropdown.placeholder)} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">
                  {t(data.inputDropdown.options.option1)}
                </SelectItem>
                <SelectItem value="option2">
                  {t(data.inputDropdown.options.option2)}
                </SelectItem>
                <SelectItem value="option3">
                  {t(data.inputDropdown.options.option3)}
                </SelectItem>
                <SelectItem value="option4">
                  {t(data.inputDropdown.options.option4)}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className={`${styles.ContactFormInput}`}>
            <Label htmlFor="message" className={styles.ContactFormLabel}>
              {t(data.inputTextarea.title)}
            </Label>
            <Textarea
              placeholder={t(data.inputTextarea.placeholder)}
              className="resize-none h-40"
              id="message"
            />
          </div>
          <div className={`${styles.ContactFormActions}`}>
            <Button variant="outline">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
});

export default ContactForm;
