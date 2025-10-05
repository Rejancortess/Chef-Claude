import ReactMarkdown from 'react-markdown';

export default function ChefAi(props) {
  return (
    <section className="w-150 mx-auto mt-10 mb-10 min-h-fit">
      <div className="bg-gradient-to-r from-[#D17557] to-[#E8956F] p-4 rounded-t-2xl shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-2xl">👨‍🍳</span>
          </div>
          <div>
            <h2 className="text-white font-bold text-lg">Chef Claude AI</h2>
            <p className="text-white/80 text-sm">
              Your personalized recipe suggestion
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-b-2xl shadow-lg border-t-2 border-[#D17557]/20">
        <ReactMarkdown
          className="prose prose-lg max-w-none"
          components={{
            h1: ({ children }) => (
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#F0EFEB]">
                <span className="text-3xl">🍽️</span>
                <h1 className="text-3xl font-bold text-[#141413] m-0">
                  {children}
                </h1>
              </div>
            ),
            h2: ({ children }) => {
              const text = children?.toString().toLowerCase() || '';
              const isIngredients = text.includes('ingredients');
              const isInstructions =
                text.includes('instructions') || text.includes('directions');
              const isNutrition = text.includes('nutrition');

              let icon = '📝';
              let bgColor = 'bg-gray-50';
              let textColor = 'text-[#141413]';

              if (isIngredients) {
                icon = '🥬';
                bgColor = 'bg-green-50';
                textColor = 'text-green-700';
              } else if (isInstructions) {
                icon = '👨‍🍳';
                bgColor = 'bg-blue-50';
                textColor = 'text-blue-700';
              } else if (isNutrition) {
                icon = '📊';
                bgColor = 'bg-purple-50';
                textColor = 'text-purple-700';
              }

              return (
                <div className={`${bgColor} p-4 rounded-xl mb-4 mt-8`}>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{icon}</span>
                    <h2 className={`text-2xl font-semibold ${textColor} m-0`}>
                      {children}
                    </h2>
                  </div>
                </div>
              );
            },
            h3: ({ children }) => (
              <h3 className="text-xl font-medium text-[#141413] mb-3 mt-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#D17557] rounded-full"></span>
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="text-[#475467] mb-4 leading-relaxed text-base">
                {children}
              </p>
            ),
            ul: ({ children }) => (
              <ul className="mb-6 space-y-3">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="mb-6 space-y-3 counter-reset-[step-counter]">
                {children}
              </ol>
            ),
            li: ({ children, node }) => {
              const isInOrderedList = node?.parent?.tagName === 'ol';

              if (isInOrderedList) {
                return (
                  <li className="flex gap-4 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-200">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white text-sm font-bold rounded-full flex items-center justify-center mt-1">
                      {node?.parent?.children?.indexOf(node) + 1}
                    </span>
                    <span className="text-[#475467] leading-relaxed">
                      {children}
                    </span>
                  </li>
                );
              }

              return (
                <li className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#D17557] rounded-full mt-2"></span>
                  <span className="text-[#475467] leading-relaxed">
                    {children}
                  </span>
                </li>
              );
            },
            strong: ({ children }) => (
              <strong className="font-semibold text-[#141413] bg-yellow-100 px-1 rounded">
                {children}
              </strong>
            ),
            em: ({ children }) => (
              <em className="italic text-[#D17557] font-medium">{children}</em>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-[#D17557] bg-orange-50 p-4 rounded-r-lg italic text-[#6B7280] my-6">
                <span className="text-2xl text-[#D17557]">💡</span>
                <div className="mt-2">{children}</div>
              </blockquote>
            ),
            code: ({ children }) => (
              <code className="bg-[#F0EFEB] px-2 py-1 rounded text-sm font-mono text-[#141413] border">
                {children}
              </code>
            ),
            pre: ({ children }) => (
              <pre className="bg-[#F0EFEB] p-4 rounded-lg overflow-x-auto mb-4 border">
                {children}
              </pre>
            ),
          }}
        >
          {props.recipe}
        </ReactMarkdown>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-[#F0EFEB] flex items-center justify-between text-sm text-[#6B7280]">
          <div className="flex items-center gap-2">
            <span>🤖</span>
            <span>Generated by Chef Claude AI</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span>⭐</span>
              <span>Personalized for you</span>
            </span>
            <span className="flex items-center gap-1">
              <span>🕒</span>
              <span>Fresh recipe</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
