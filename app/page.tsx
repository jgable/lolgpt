import { PageData } from "./components/page-data";

export const runtime = "edge";

export default async function Page() {
  return <PageData />;
}
