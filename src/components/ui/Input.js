const BASE =
  "border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition";

export function Field({ label, htmlFor, required, optionalLabel, children }) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={htmlFor} className="text-sm font-semibold text-gray-700">
          {label}{" "}
          {required && <span className="text-red-500">*</span>}
          {optionalLabel && (
            <span className="text-gray-400 font-normal">({optionalLabel})</span>
          )}
        </label>
      )}
      {children}
    </div>
  );
}

export default function Input({ className = "", ...props }) {
  return <input className={`${BASE} ${className}`} {...props} />;
}

export function Textarea({ className = "", rows = 5, ...props }) {
  return (
    <textarea
      rows={rows}
      className={`${BASE} resize-none ${className}`}
      {...props}
    />
  );
}
