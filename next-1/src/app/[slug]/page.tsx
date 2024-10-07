import Image from "next/image";
import image1 from "./image.jpg";
import styles from "./page.module.css";

interface DynamicParams {
  slug: string;
}

interface Props {
  params: DynamicParams;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = params;
  return {
    title: `Title ${slug}`,
    description: `Desc ${slug}`,
  };
}

export default function DynamicPage({ params }: Props) {
  return (
    <div>
      <h1>Dynamic Page: {params.slug}</h1>
      <div className={styles.imageWrapper}>
        <Image
          quality={100}
          src={image1}
          alt="image"
          fill
          objectFit="contain"
          placeholder="blur"
        />
      </div>
    </div>
  );
}
