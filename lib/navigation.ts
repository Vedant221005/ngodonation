import { useRouter } from "next/navigation";

export const navigateToCertificate = (donorName: string) => {
  const encodedName = encodeURIComponent(donorName);
  window.open(`/certificate?name=${encodedName}`, "_blank");
};