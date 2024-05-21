

const mockUrls = [
  "https://utfs.io/f/cbdc4dac-b635-4d0f-80e5-00c5691d07f9-1e.jpeg",
  "https://utfs.io/f/8438e43a-699a-4561-89c9-c7b44b2bcb82-1d.jpeg",
  "https://utfs.io/f/08e0e6c0-a8b0-4cc1-9b3a-2b39a99ea60b-11ki.jpeg"
]


const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url}>
            </img>
          </div>
        ))}
      </div>
    </main>
  );
}
