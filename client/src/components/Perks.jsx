export default function Perks({ selected, onChange }) {
  function handleCbClick(e) {
    const { checked, name } = e.target;
    if (checked) {
      onChange([...selected, name]);
    } else {
      onChange([...selected.filter((selectedName) => selectedName !== name)]);
    }
  }
  return (
    <>
      <label className="border p-4">
        <input
          type="checkbox"
          checked={selected.includes("wifi")}
          name="wifi"
          onChange={handleCbClick}
        />
        <span>Wifi</span>
      </label>
      <label className="border p-4">
        <input
          type="checkbox"
          checked={selected.includes("parkin")}
          name="parkin"
          onChange={handleCbClick}
        />
        <span>Parkin</span>
      </label>
      <label className="border p-4">
        <input
          type="checkbox"
          checked={selected.includes("tv")}
          name="tv"
          onChange={handleCbClick}
        />
        <span>TV</span>
      </label>
      <label className="border p-4">
        <input
          type="checkbox"
          checked={selected.includes("tv")}
          name="pets"
          onChange={handleCbClick}
        />
        <span>Pets</span>
      </label>
    </>
  );
}
