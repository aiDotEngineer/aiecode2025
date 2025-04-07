export default () => null;

export function getServerSideProps() {
  return {
    redirect: {
      destination: '/worldsfair/2024',
      permanent: false,
    },
  };
}
