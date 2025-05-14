
export default function EditPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Edit Post {params.id}</h1>
      {/* 编辑表单可以放在这里 */}
    </div>
  );
}