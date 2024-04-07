"use client";
import React from "react";
import { useFormStatus } from "react-dom";

function MealsFormSubmit() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} type="submit">
      {pending ? "제출중..." : "Share Meal"}
    </button>
  );
}

export default MealsFormSubmit;
