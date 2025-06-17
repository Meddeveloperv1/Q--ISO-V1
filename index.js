import WalletConnect from '../components/walletConnect';
import CardForm from '../components/cardForm';
import ACHForm from '../components/achForm';
import Biometric from '../components/biometric';

export default function Home() {
  return (
    <main className="bg-pink-50 min-h-screen font-sans">
      <h1 className="text-center text-pink-800 text-3xl font-bold py-4">Q-ISO POS</h1>
      <Biometric />
      <WalletConnect />
      <CardForm />
      <ACHForm />
    </main>
  );
}
