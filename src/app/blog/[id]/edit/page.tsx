export default async function EditPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div>
      <h1>Edit Post {id}</h1>
    </div>
  );
}