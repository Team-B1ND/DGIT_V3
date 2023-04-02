import React, { CSSProperties } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  style?: CSSProperties;
  buttonType: ButtonType;
  className?: string;
}

export type ButtonType = "submit" | "cancel";
