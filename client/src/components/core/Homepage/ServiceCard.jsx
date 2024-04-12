const ServiceCard =({item}) => {
  return (
    <div className="text-center flex justify-center flex-col">
        <img src={item.image} alt="" className="h-[400px] rounded-lg object-cover" />
        <p className="mt-5 text-gray-500 font-semibold">{item.title}</p>
        <p className="w-2/3 m-auto">{item.subtitle}</p>
    </div>
  )
}

export default ServiceCard