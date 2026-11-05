// Joins class names, skipping empty ones. No conflict merging: don't pass classes that override each other.
export function cn(...inputs: (string | false | null | undefined)[]) {
  return inputs.filter(Boolean).join(" ")
}
