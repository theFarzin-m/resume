import React from "react";
import { Helmet } from "react-helmet";

const ComponentWithSchema = () => (
  <Helmet>
    <meta
      name="description"
      content="farzin (farzin'm) abbasi front-end/react developer. فرزین عباسی برنامه نویس ری اکت"
    />
    <meta
      name="keywords"
      content="Farzin Abbasi, توسعه دهنده وب, Front-End, React, فرزین عباسی, web developer, Javascript,farzin'm, thefarzin-m, farzinabbasi, farzin abbasi"
    />

    <link rel="canonical" href="https://farzinabbasi.ir" />
    <script type="application/ld+json">
      {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Farzin Abbasi",
            "url": "https://farzinabbasi.ir/",
            "sameAs": [
              "https://www.linkedin.com/in/farzinabbasi/",
              "https://github.com/Farzin2079"
            ],
            "jobTitle": "Front-End Web Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "Self-Employed"
            },
            "knowsAbout": ["Front-End Development", "React"]
          }
        `}
    </script>
  </Helmet>
);

export default ComponentWithSchema;
