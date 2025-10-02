// 개별 Product의 UI(컴포넌트)
// 구조 분해 할당을 활용해서 객체 props 를 분해
// product: 개별 상품 정보를 저장하고 있는 객체 데이터
export default function Product({ product }) {
  return (
    <div className="m-4 p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out bg-white">
      <p className="text-xl font-bold text-orange-600 mb-2">{product["title"]}</p>
      <p className="text-gray-700">{product["description"]}</p>
    </div>
  );
}
