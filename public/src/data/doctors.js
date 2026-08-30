export const doctors = Array.from(
  { length: 16 },
  (_, i) => ({
    id: i + 1,
    name: "",
    specialty: "",
    bio: "",
    photo: "",
  })
);

export function getDoctor(id) {
  const n = Number(id);

  return (
    doctors.find((doctor) => doctor.id === n) ||
    null
  );
}