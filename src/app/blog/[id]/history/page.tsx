
export default function HistoryPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>History Post {params.id}</h1>
      {/* 编辑表单历史可以放在这里 */}
    </div>
  );
}