const Tags = ({ tags }) => {
  return (
    <div className='mb-20 mx-5 max-w-7xl xl:mx-auto'>
      <h1 className='text-lg font-semibold mb-4'>Etiketler</h1>
      <ul className='flex gap-2 flex-wrap'>
        {tags.map((tag) => (
          <li
            key={tag.id}
            className='rounded py-2 px-4 text-xs bg-[#E5E5E5]'
          >
            {tag.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
