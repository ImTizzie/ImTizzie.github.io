import { MetaProvider } from "@solidjs/meta";
import { FileRoutes } from "solid-start";

export default function Root() {
  return (
    <MetaProvider>
      <FileRoutes />
    </MetaProvider>
  );
}
