export default function InputField({
  label,
  name,
  value,
  onChange,
}) {
  return (
    <div className="mb-5">
      <label
        htmlFor={name}
        className="block mb-2 font-medium text-slate-700"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type="number"
        step="any"
        value={value}
        onChange={onChange}
        required
        className="
            w-full
            rounded-lg
            border
            border-slate-300
            px-4
            py-3
            outline-none
            focus:border-blue-500
        "
      />
    </div>
  );
}