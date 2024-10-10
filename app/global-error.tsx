"use client";

import NextError from "next/error";
import { useEffect } from "react";

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  // You can log the error to an external service here if needed.
  useEffect(() => {
    // Log the error to the console or other logging service (optional)
    console.error("Error occurred:", error);
  }, [error]);

  return (
    <html>
      <body>
        {/* Renders a generic error page */}
        <NextError statusCode={0} />
      </body>
    </html>
  );
}
