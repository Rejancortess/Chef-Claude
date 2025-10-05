import { useState } from 'react';
import ChefAi from './ChefAi';

import { FaRegCheckCircle, FaTrash, FaMagic } from 'react-icons/fa';
import { testHuggingFaceClient } from '../ai';

export default function Main() {
  const [listIngredients, setListIngredients] = useState([]);
  const [recipe, setRecipe] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(formData) {
    const ingredient = formData.get('ingredient');
    if (ingredient.trim()) {
      setListIngredients(prev => [...prev, ingredient.trim()]);
    }
  }

  function removeIngredient(indexToRemove) {
    setListIngredients(prev =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  }

  function showIngredient(listIngredients) {
    return listIngredients.map((ingredient, index) => (
      <li
        key={index}
        className="group flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-green-100 hover:shadow-md transition-all duration-200"
      >
        <div className="flex items-center gap-3">
          <FaRegCheckCircle className="text-green-500 text-lg" />
          <span className="text-[#141413] font-medium capitalize">
            {ingredient}
          </span>
        </div>
        <button
          onClick={() => removeIngredient(index)}
          className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-600 transition-all duration-200 p-1"
        >
          <FaTrash className="text-sm" />
        </button>
      </li>
    ));
  }

  async function handleShow() {
    setIsLoading(true);
    try {
      const recipeMarkdown = await testHuggingFaceClient(listIngredients);
      setRecipe(recipeMarkdown);
    } catch (error) {
      console.error('Error generating recipe:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="w-200 min-h-screen bg-gradient-to-br from-[#FAFAF8] to-[#F5F5F3] pb-10 border-2 border-[#D1D5DB] rounded-3xl shadow-xl mx-4 my-4">
      {/* Hero Section */}
      <section className="w-150 mx-auto pt-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="text-4xl">🤖</span>
          <h1 className="text-4xl font-bold text-[#141413]">Chef Claude AI</h1>
          <span className="text-4xl">👨‍🍳</span>
        </div>
        <p className="text-[#6B7280] text-lg mb-8">
          Add your ingredients and let AI create the perfect recipe for you!
        </p>
      </section>

      {/* Add Ingredients Form */}
      <section className="w-150 mx-auto">
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🥬</span>
            <h2 className="text-xl font-semibold text-[#141413]">
              Add Ingredients
            </h2>
          </div>
          <form action={handleSubmit} className="flex gap-4">
            <input
              className="flex-1 px-4 py-3 border-2 border-[#D1D5DB] rounded-xl focus:border-[#D17557] focus:outline-none transition-colors duration-200 text-[#141413]"
              type="text"
              name="ingredient"
              placeholder="e.g. tomatoes, chicken, garlic..."
              required
            />
            <button
              className="bg-gradient-to-r from-[#D17557] to-[#E8956F] hover:from-[#C16647] hover:to-[#D7845F] text-white px-6 py-3 rounded-xl font-semibold cursor-pointer transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
              type="submit"
            >
              <span>+</span>
              Add
            </button>
          </form>
        </div>
      </section>

      {/* Ingredients List */}
      {listIngredients.length > 0 && (
        <section className="w-150 mx-auto mt-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">📝</span>
              <h2 className="text-2xl font-semibold text-[#141413]">
                Your Ingredients ({listIngredients.length})
              </h2>
            </div>
            <div className="grid gap-3">{showIngredient(listIngredients)}</div>
          </div>
        </section>
      )}

      {/* Generate Recipe Section */}
      {listIngredients.length >= 3 && (
        <section className="w-150 mx-auto mt-8">
          <div className="bg-gradient-to-r from-[#D17557] to-[#E8956F] p-6 rounded-2xl shadow-lg text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <FaMagic className="text-2xl text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    Ready for Magic? ✨
                  </h2>
                  <p className="text-white/90 text-lg">
                    Let Chef Claude AI create a delicious recipe from your{' '}
                    {listIngredients.length} ingredients!
                  </p>
                </div>
              </div>
              <button
                onClick={handleShow}
                disabled={isLoading}
                className="bg-white text-[#D17557] px-8 py-4 rounded-xl font-bold cursor-pointer transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-[#D17557] border-t-transparent rounded-full animate-spin"></div>
                    Cooking...
                  </>
                ) : (
                  <>
                    <FaMagic />
                    Generate Recipe
                  </>
                )}
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Loading State */}
      {isLoading && (
        <section className="w-150 mx-auto mt-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 border-4 border-[#D17557] border-t-transparent rounded-full animate-spin"></div>
              <h3 className="text-xl font-semibold text-[#141413]">
                Chef Claude is cooking up something special...
              </h3>
              <p className="text-[#6B7280]">
                Analyzing your ingredients and creating a personalized recipe
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Recipe Display */}
      {recipe && !isLoading && <ChefAi recipe={recipe} />}
    </main>
  );
}
