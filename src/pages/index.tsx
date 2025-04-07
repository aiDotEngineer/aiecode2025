export default () => null;

export function getServerSideProps() {
  return {
    redirect: {
      destination: '/summit/2025',
      permanent: false,
    },
  };
}
