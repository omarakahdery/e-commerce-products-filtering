import { useRouter } from "next/router";
import { useState, useEffect } from "react";
export default function Home() {
  const router = useRouter();
  const ourQuery = router.query;
  const [initialValues, setInitialValues] = useState({
    categories: "all-categories",
    color: "all-color",
    size: "all-size",
  });
  useEffect(() => {
    setInitialValues({
      categories: router.query.categories,
      color: router.query.color,
      size: router.query.size,
    });
  }, [router.query]);
  function handleChange(event) {
    setInitialValues({
      ...initialValues,
      [event.target.name]: event.target.value,
    });
  }
  const handelSubmit = (e) => {
    e.preventDefault();
    router.push({ pathname: "/", query: initialValues }, undefined, {
      shallow: true,
    });
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <select
          onChange={handleChange}
          value={initialValues.categories}
          name="categories"
        >
          <option value="all-categories">get all</option>
          <option value="electronics">electronics</option>
          <option value="jewelery">jewelery</option>
          <option value="men-clothing">men's clothing</option>
          <option value="women-clothing">women's clothing</option>
        </select>
        <select
          onChange={handleChange}
          value={initialValues.color}
          name="color"
        >
          <option value="all color">all color</option>
          <option value="red">Red</option>
          <option value="black">Black</option>
          <option value="white">White</option>
        </select>
        <select
          onChange={handleChange}
          label="size"
          value={initialValues.size}
          name="size"
        >
          <option value="all-size">all size</option>
          <option value="s">S</option>
          <option value="m">M</option>
          <option value="l">L</option>
          <option value="xl">XL</option>
        </select>
        <button type="submit">Submit</button>
      </form>

      <p>{JSON.stringify(ourQuery, null, 2)}</p>
    </div>
  );
}
