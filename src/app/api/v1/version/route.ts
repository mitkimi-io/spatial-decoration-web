import versionData from "@/data/version.json";
import { wrapApiResponse } from "@/lib/api-response";

export const dynamic = "force-static";

export function GET() {
  return Response.json(wrapApiResponse(versionData));
}
