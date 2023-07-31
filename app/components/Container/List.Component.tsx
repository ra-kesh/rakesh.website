interface ListProps<T> {
  item: (props: T) => JSX.Element;
  items: Array<T & { id?: string }>;
}

export function List<T>({ item: Component, items }: ListProps<T>) {
  return (
    <ul
      className="flex flex-col sm:flex-row items-center justify-center lg:justify-evenly w-full flex-wrap"
      role="list"
    >
      {items.map((item) => (
        <Component key={item.id} {...item} />
      ))}
    </ul>
  );
}
