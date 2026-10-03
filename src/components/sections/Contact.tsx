import React from "react";
import { PhoneOutlined, EmailOutlined, LocationOnOutlined, AccessTimeOutlined, WhatsApp } from "@mui/icons-material";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { ButtonLink } from "../ButtonLink";
import { WhatsAppButton } from "../WhatsAppButton";
import { Placeholder } from "../Placeholder";
import { BrandMark } from "../BrandMark";
import { siteConfig } from "../../data/siteConfig";
import { contactValue, getEmailHref, getPhoneHref, type ContactKey } from "../../utils/contact";

const ROWS: {key: ContactKey;label: string;icon: React.ReactNode;}[] = [
{ key: "phone", label: "Phone", icon: <PhoneOutlined /> },
{ key: "whatsapp", label: "WhatsApp", icon: <WhatsApp /> },
{ key: "email", label: "Email", icon: <EmailOutlined /> },
{ key: "location", label: "Consultation Location", icon: <LocationOnOutlined /> },
{ key: "timings", label: "Consultation Timings", icon: <AccessTimeOutlined /> }];


export function Contact() {
  const { doctor } = siteConfig;
  const phoneHref = getPhoneHref();
  const emailHref = getEmailHref();

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="contact-heading" eyebrow="Contact" title="Contact Dr. Samar Arfeen" />
        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-5" scale>
            <div className="relative h-full overflow-hidden rounded-[28px] bg-navy-900 p-7 text-white sm:p-9">
              <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
              <div className="relative">
                <BrandMark inverted className="h-12 w-12" />
                <p className="mt-6 font-display text-2xl font-extrabold uppercase tracking-[0.04em]">{doctor.name}</p>
                <p className="mt-2 text-[14.5px] font-semibold text-teal-300">{doctor.credentials}</p>
                <p className="mt-4 text-[15px] text-navy-200">{doctor.primaryTitle}</p>
                <p className="text-[15px] text-navy-200">{doctor.secondaryTitle}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink href="#appointment" variant="primary">
                    Book Appointment
                  </ButtonLink>
                  <WhatsAppButton variant="outlineLight" />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7">
            <div className="h-full rounded-[28px] border border-navy-100 bg-white p-6 shadow-card sm:p-8">
              <dl className="divide-y divide-navy-100">
                {ROWS.map((r) => {
                  const c = contactValue(r.key);
                  const link = r.key === "phone" ? phoneHref : r.key === "email" ? emailHref : null;
                  return (
                    <div key={r.key} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-medical-50 text-medical-600" aria-hidden="true">
                        {r.icon}
                      </span>
                      <div className="min-w-0">
                        <dt className="text-xs font-semibold uppercase tracking-wider text-navy-400">{r.label}</dt>
                        <dd className="mt-1 break-words text-[15.5px] font-medium text-navy-900">
                          {link ?
                          <a href={link} className="hover:text-medical-700">
                              {c.value}
                            </a> :

                          <Placeholder value={c.value} isPlaceholder={c.isPlaceholder} />
                          }
                        </dd>
                      </div>
                    </div>);

                })}
              </dl>
              {(phoneHref || emailHref) &&
              <div className="mt-6 flex flex-wrap gap-3 border-t border-navy-100 pt-6">
                  {phoneHref &&
                <ButtonLink href={phoneHref} variant="navy" icon={<PhoneOutlined sx={{ fontSize: 18 }} />}>
                      Call
                    </ButtonLink>
                }
                  {emailHref &&
                <ButtonLink href={emailHref} variant="outline" icon={<EmailOutlined sx={{ fontSize: 18 }} />}>
                      Email
                    </ButtonLink>
                }
                </div>
              }
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}