import themesData from "@/data/themes.json";
import { wrapApiResponse } from "@/lib/api-response";

export const dynamic = "force-static";

export function GET() {
  return Response.json(wrapApiResponse(themesData));
}
