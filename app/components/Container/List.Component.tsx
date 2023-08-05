interface ListProps<T> {
  item: (props: T) => JSX.Element;
  items: Array<T & { id?: string }>;
}

export function List<T>({ item: Component, items }: ListProps<T>) {
  return (
    <ul
      className="flex flex-col sm:flex-row items-center justify-center lg:justify-start w-full flex-wrap gap-x-4 px-4"
      role="list"
    >
      {items.map((item) => (
        <Component key={item.id} {...item} />
      ))}
    </ul>
  );
}
