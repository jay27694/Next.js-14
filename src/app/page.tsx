"use client";
import { useFormState, useFormStatus } from "react-dom";
import { handleSubmit } from "./actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="p-2 bg-gray-300 rounded-md"
      aria-disabled={pending}
    >
      Trigger Webhook
    </button>
  );
}

export default function Home() {
  const [state, formAction] = useFormState(handleSubmit, false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <form action={formAction} className="flex flex-col w-full lg:w-1/2">
          <textarea
            name="text"
            placeholder="type anything to translate to Hindi"
            className="p-2 mb-4 border border-gray-300 rounded-md"
            rows="5"
          />
          <SubmitButton />
          {state && (
            <div className="p-2 pt-4 text-green-600 rounded-md">
              Successfully called Webhook!!
            </div>
          )}
        </form>
      </div>
    </main>
  );
}
