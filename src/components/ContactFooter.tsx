import { contact } from "@/data/content";

/** Closing contact lines. The original has no navigation or footer menu. */
export function ContactFooter() {
  return (
    <footer className="site-container">
      <div className="row">
        <div className="col">
          <p className="text-center text-[16px]">
            <a href={`mailto:${contact.email}`} className="text-inherit">
              {contact.email}
            </a>
          </p>
          <p className="mt-5 text-center text-[16px]">
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="text-inherit"
            >
              {contact.phone}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
