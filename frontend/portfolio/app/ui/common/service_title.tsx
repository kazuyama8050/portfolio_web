import { services } from "@/app/lib/constants";

export function Title({ serviceName }: {serviceName: string}) {
  return (
    <h1 className={`mb-4 text-xl md:text-2xl`}>
        {services[serviceName].name}
    </h1>
  )
}