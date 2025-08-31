import React from 'react';

const FontSamples = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Font Options for Your Website
        </h1>
        
        {/* Current Font */}
        <div className="font-samples mb-12">
          <h2>Current Font: Outfit</h2>
          <div className="sample">
            <h3 className="font-outfit text-2xl">Smart College Counselling Powered by Real Experience</h3>
            <p className="font-outfit text-lg">This is how your website currently looks with Outfit font. It's modern, clean, and professional.</p>
            <p className="font-outfit text-base">Body text with Outfit font - clean and readable for all your content.</p>
          </div>
        </div>

        {/* Harvard Style */}
        <div className="font-samples mb-12">
          <h2>Harvard Style: Canela Deck Web (Headers) + GT America Standard (Body)</h2>
          <div className="sample">
            <h3 className="font-canela-deck text-2xl">Smart College Counselling Powered by Real Experience</h3>
            <p className="font-gt-america text-lg">This mimics Harvard's elegant serif headers with clean sans-serif body text.</p>
            <p className="font-gt-america text-base">Body text with GT America style - professional and highly readable.</p>
          </div>
        </div>

        {/* Brown University Style */}
        <div className="font-samples mb-12">
          <h2>Brown University Style: Source Sans Pro + Merriweather</h2>
          <div className="sample">
            <h3 className="font-merriweather text-2xl">Smart College Counselling Powered by Real Experience</h3>
            <p className="font-source-sans text-lg">This combines Merriweather serif for headers with Source Sans Pro for body text.</p>
            <p className="font-source-sans text-base">Body text with Source Sans Pro - modern and accessible.</p>
          </div>
        </div>

        {/* Alternative Option 1 */}
        <div className="font-samples mb-12">
          <h2>Alternative Option 1: Merriweather (Headers) + Poppins (Body)</h2>
          <div className="sample">
            <h3 className="font-merriweather text-2xl">Smart College Counselling Powered by Real Experience</h3>
            <p className="font-poppins text-lg">Merriweather serif headers with Poppins sans-serif body text.</p>
            <p className="font-poppins text-base">Body text with Poppins - friendly and modern.</p>
          </div>
        </div>

        {/* Alternative Option 2 */}
        <div className="font-samples mb-12">
          <h2>Alternative Option 2: Roboto Condensed (Headers) + Inter (Body)</h2>
          <div className="sample">
            <h3 className="font-roboto-condensed text-2xl">Smart College Counselling Powered by Real Experience</h3>
            <p className="font-inter text-lg">Roboto Condensed headers with Inter body text - clean and tech-focused.</p>
            <p className="font-inter text-base">Body text with Inter - excellent readability and modern feel.</p>
          </div>
        </div>

        {/* Alternative Option 3 */}
        <div className="font-samples mb-12">
          <h2>Alternative Option 3: Poppins (Headers) + Roboto (Body)</h2>
          <div className="sample">
            <h3 className="font-poppins text-2xl">Smart College Counselling Powered by Real Experience</h3>
            <p className="font-roboto text-lg">Poppins headers with Roboto body text - friendly and highly readable.</p>
            <p className="font-roboto text-base">Body text with Roboto - Google's workhorse font, excellent readability.</p>
          </div>
        </div>

        {/* Font Comparison Table */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Font Comparison Summary</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left">Font Combination</th>
                  <th className="border border-gray-300 p-3 text-left">Style</th>
                  <th className="border border-gray-300 p-3 text-left">Best For</th>
                  <th className="border border-gray-300 p-3 text-left">Readability</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-outfit">Outfit (Current)</td>
                  <td className="border border-gray-300 p-3">Modern Sans-serif</td>
                  <td className="border border-gray-300 p-3">Contemporary, Clean</td>
                  <td className="border border-gray-300 p-3">Excellent</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-canela-deck">Canela Deck + GT America</td>
                  <td className="border border-gray-300 p-3">Serif + Sans-serif</td>
                  <td className="border border-gray-300 p-3">Academic, Prestigious</td>
                  <td className="border border-gray-300 p-3">Very Good</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-merriweather">Merriweather + Source Sans</td>
                  <td className="border border-gray-300 p-3">Serif + Sans-serif</td>
                  <td className="border border-gray-300 p-3">Academic, Professional</td>
                  <td className="border border-gray-300 p-3">Excellent</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-merriweather">Merriweather + Poppins</td>
                  <td className="border border-gray-300 p-3">Serif + Sans-serif</td>
                  <td className="border border-gray-300 p-3">Friendly, Academic</td>
                  <td className="border border-gray-300 p-3">Very Good</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-roboto-condensed">Roboto Condensed + Inter</td>
                  <td className="border border-gray-300 p-3">Condensed + Sans-serif</td>
                  <td className="border border-gray-300 p-3">Modern, Tech-focused</td>
                  <td className="border border-gray-300 p-3">Good</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-poppins">Poppins + Roboto</td>
                  <td className="border border-gray-300 p-3">Sans-serif + Sans-serif</td>
                  <td className="border border-gray-300 p-3">Friendly, Modern</td>
                  <td className="border border-gray-300 p-3">Excellent</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Recommendation */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Recommendations</h2>
          <div className="space-y-3 text-blue-700">
            <p><strong>For Academic Prestige:</strong> Canela Deck + GT America (Harvard style)</p>
            <p><strong>For Modern Academic:</strong> Merriweather + Source Sans (Brown style)</p>
            <p><strong>For Friendly Academic:</strong> Merriweather + Poppins</p>
            <p><strong>For Contemporary:</strong> Poppins + Roboto</p>
            <p><strong>Keep Current:</strong> Outfit (already excellent)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FontSamples;
