type BlogPageProps = {
  params: {
    shopid: string;
  };
};

export default function page({ params }:BlogPageProps) {
  return (
    <div>
        page : {params.shopid}
    </div>
  )
}