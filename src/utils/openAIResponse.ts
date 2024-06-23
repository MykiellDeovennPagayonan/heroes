import OpenAI from "openai";

const openai = new OpenAI({apiKey: process.env.NEXT_PUBLIC_OPEN_AI_API, dangerouslyAllowBrowser: true});

export default async function getResponse(question: string, prompt: string) {
  const completion = await openai.chat.completions.create({
    messages: [{"role": "system", "content": prompt + " Make sure to answer in less than 50 words"},
        {"role": "user", "content": question}],
    model: "gpt-3.5-turbo",
    max_tokens: 100
  });

  console.log(completion.choices[0].message.content);

  return completion.choices[0].message.content;
}