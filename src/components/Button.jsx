const Button = ({btnClass,text,onClick}) => {
  const classN = `text-(--Rose-100) w-fit h-fit bg-(--Red) text-sm
  bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 border-2  hover:border-red-600 rounded-[100px] py-[6px] px-[20px] white-space-nowrap transition-border-color duration-250 text-nowrap cursor-pointer ${btnClass}`;
  return (
    <button className={classN} type="button" onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
