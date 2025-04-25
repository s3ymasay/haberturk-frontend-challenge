export default function Error({ message = "Bir hata oluştu." }) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-red-600 text-lg">
        Hata: {message}
      </div>
    );
  }
  