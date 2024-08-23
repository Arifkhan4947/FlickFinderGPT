import OpenAI from 'openai';
import { OPENAI_KEY } from "../utils/constants";

const openai = new OpenAI({
  apiKey: OPENAI_KEY,    // default to process.env ["OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true    // -> Bypass browser environment restriction. it's important to run our application.
                                  // -> but it's not good practice for run the application because my "secret key" shown in my code directly.
});                               // -> it only use for Runtime environment.


export default openai;