import { z } from "zod";
import ical from "node-ical";
import type { CalendarResponse } from "node-ical"
import { db } from "$db/db"

async function fetchICS(url: string) {
  // Validate the URL
  const urlSchema = z.string().url();
  const parsedURL = urlSchema.parse(url);
  const response = ical.fromURL(parsedURL, saveICS);
}

async function saveICS(icsResponse: CalendarResponse) {
  if(!icsResponse) throw Error('Did not receive valid data!');
  
}