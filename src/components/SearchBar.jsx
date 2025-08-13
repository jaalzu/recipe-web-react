export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Buscar receta..."
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  )
}
