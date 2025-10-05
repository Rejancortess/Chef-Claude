import { InferenceClient } from '@huggingface/inference';

const client = new InferenceClient(import.meta.env.VITE_HUGGINGFACE_API_KEY);
const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`;

export async function testHuggingFaceClient(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(', ');
  try {
    console.log('Testing Hugging Face client...');
    console.log(
      'API Key:',
      import.meta.env.VITE_HUGGINGFACE_API_KEY ? 'Set' : 'Missing'
    );

    const chatCompletion = await client.chatCompletion({
      provider: 'fireworks-ai',
      model: 'openai/gpt-oss-120b',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        {
          role: 'user',
          content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
        },
      ],
      max_tokens: 1024,
    });

    console.log('✅ Success! Response:', chatCompletion.choices[0].message);
    return chatCompletion.choices[0].message.content;
  } catch (error) {
    console.error('❌ Error testing Hugging Face client:', error);
    return null;
  }
}

export { client };
