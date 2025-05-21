import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@components/button';
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  Crown,
  Dice5,
  FileText,
  Github,
  Globe,
  Map,
  MessageSquare,
  PenTool,
  Shield,
  Twitter,
  Users,
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className='flex min-h-[100dvh] flex-col bg-[#f2e8cf] text-[#594a3c] font-serif relative'>
      {/* Paper texture overlay */}
      <div
        className='fixed inset-0 pointer-events-none z-0 opacity-30'
        style={{
          backgroundImage: "url('/placeholder.svg?height=500&width=500')",
          backgroundRepeat: 'repeat',
        }}
      ></div>

      {/* Header - Tavern Sign Style */}
      <header className='sticky top-0 z-50 w-full border-b-2 border-[#b8a99a] bg-[#f2e8cf]/95 backdrop-blur supports-[backdrop-filter]:bg-[#f2e8cf]/60 shadow-md relative'>
        <div className='container flex h-20 items-center justify-between'>
          <div className='flex items-center gap-3'>
            <div className='relative h-12 w-12'>
              <Shield className='h-12 w-12 text-[#8c7851]' />
              <div className='absolute inset-0 flex items-center justify-center'>
                <span className='text-xs font-bold text-[#f2e8cf]'>LT</span>
              </div>
            </div>
            <span className='text-2xl font-bold text-[#594a3c]'>
              The Local Tavern
            </span>
          </div>
          <nav className='hidden md:flex items-center gap-6'>
            <Link
              href='#features'
              className='text-sm font-medium text-[#8c7851] hover:text-[#594a3c]'
            >
              Menu
            </Link>
            <Link
              href='#how-it-works'
              className='text-sm font-medium text-[#8c7851] hover:text-[#594a3c]'
            >
              How It Works
            </Link>
            <Link
              href='#testimonials'
              className='text-sm font-medium text-[#8c7851] hover:text-[#594a3c]'
            >
              Patrons
            </Link>
            <Link
              href='#pricing'
              className='text-sm font-medium text-[#8c7851] hover:text-[#594a3c]'
            >
              Run A Tab
            </Link>
            <Link
              href='#faq'
              className='text-sm font-medium text-[#8c7851] hover:text-[#594a3c]'
            >
              Questions
            </Link>
          </nav>
          <div className='flex items-center gap-4'>
            <Link
              href='#'
              className='text-sm font-medium text-[#8c7851] hover:text-[#594a3c]'
            >
              Enter
            </Link>
            <Button className='bg-[#8c7851] hover:bg-[#6e5f3d] text-[#f2e8cf] border border-[#b8a99a]'>
              Reserve A Seat
              <ArrowRight className='ml-2 h-4 w-4' />
            </Button>
          </div>
        </div>
      </header>

      <main className='flex-1 relative z-10'>
        {/* Hero Section - Vintage Paper Style */}
        <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden'>
          <div className='absolute inset-0 z-0 opacity-10'>
            <Image
              src='/placeholder.svg?height=1080&width=1920'
              alt='Vintage paper texture'
              fill
              className='object-cover'
              priority
            />
          </div>
          <div className='container relative z-10 px-4 md:px-6'>
            <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
              <div className='flex flex-col justify-center space-y-4'>
                <div className='space-y-2'>
                  <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#594a3c]'>
                    Welcome to The Local Tavern
                  </h1>
                  <p className='max-w-[600px] text-[#8c7851] md:text-xl'>
                    Where adventurers gather to forge legendary campaigns,
                    manage their quests, and share tales of glory around the
                    hearth.
                  </p>
                </div>
                <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                  <Button
                    size='lg'
                    className='bg-[#8c7851] hover:bg-[#6e5f3d] text-[#f2e8cf] border border-[#b8a99a]'
                  >
                    Begin Your Journey
                    <ArrowRight className='ml-2 h-4 w-4' />
                  </Button>
                  <Button
                    variant='outline'
                    size='lg'
                    className='border-[#b8a99a] text-[#8c7851] hover:bg-[#e8ddc3] hover:text-[#594a3c]'
                  >
                    See The Tavern
                  </Button>
                </div>
                <div className='flex items-center gap-2 text-sm text-[#8c7851]'>
                  <CheckCircle className='h-4 w-4 text-[#8c7851]' />
                  <span>No coin required to enter</span>
                  <CheckCircle className='ml-2 h-4 w-4 text-[#8c7851]' />
                  <span>Free tables available</span>
                  <CheckCircle className='ml-2 h-4 w-4 text-[#8c7851]' />
                  <span>Leave anytime</span>
                </div>
              </div>
              <div className='flex items-center justify-center'>
                <div className='relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl shadow-[#8c7851]/20 border-2 border-[#b8a99a] bg-[#e8ddc3]'>
                  <Image
                    src='/placeholder.svg?height=500&width=600'
                    width={600}
                    height={500}
                    alt='The Local Tavern App Screenshot'
                    className='object-cover'
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Menu Board Style */}
        <section
          id='features'
          className='w-full py-12 md:py-24 lg:py-32 bg-[#e8ddc3] relative'
        >
          <div
            className='absolute inset-0 pointer-events-none opacity-20'
            style={{
              backgroundImage: "url('/placeholder.svg?height=500&width=500')",
              backgroundRepeat: 'repeat',
            }}
          ></div>
          <div className='container px-4 md:px-6 relative'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-[#8c7851]/20 px-3 py-1 text-sm text-[#594a3c] border border-[#b8a99a]'>
                  Our Menu
                </div>
                <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#594a3c]'>
                  What's On Tap At The Local Tavern
                </h2>
                <p className='max-w-[900px] text-[#8c7851] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Everything you need to run epic campaigns with your fellow
                  adventurers.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3'>
              <div className='flex flex-col items-center space-y-4 rounded-lg border-2 border-[#b8a99a] bg-[#f2e8cf] p-6 shadow-md'>
                <div className='rounded-full bg-[#8c7851]/20 p-3 border border-[#b8a99a]'>
                  <Shield className='h-6 w-6 text-[#8c7851]' />
                </div>
                <h3 className='text-xl font-bold text-[#594a3c]'>
                  Campaign Management
                </h3>
                <p className='text-center text-[#8c7851]'>
                  Keep track of all your adventures. Like a well-organized quest
                  log for the seasoned adventurer.
                </p>
              </div>
              <div className='flex flex-col items-center space-y-4 rounded-lg border-2 border-[#b8a99a] bg-[#f2e8cf] p-6 shadow-md'>
                <div className='rounded-full bg-[#8c7851]/20 p-3 border border-[#b8a99a]'>
                  <FileText className='h-6 w-6 text-[#8c7851]' />
                </div>
                <h3 className='text-xl font-bold text-[#594a3c]'>
                  Character Scrolls
                </h3>
                <p className='text-center text-[#8c7851]'>
                  Upload your character parchments or create new ones. Track
                  your stats, inventory, and abilities.
                </p>
              </div>
              <div className='flex flex-col items-center space-y-4 rounded-lg border-2 border-[#b8a99a] bg-[#f2e8cf] p-6 shadow-md'>
                <div className='rounded-full bg-[#8c7851]/20 p-3 border border-[#b8a99a]'>
                  <BookOpen className='h-6 w-6 text-[#8c7851]' />
                </div>
                <h3 className='text-xl font-bold text-[#594a3c]'>
                  Tale Keeper
                </h3>
                <p className='text-center text-[#8c7851]'>
                  Record the stories of your adventures. Share with your party
                  or keep your Dungeon Master secrets.
                </p>
              </div>
              <div className='flex flex-col items-center space-y-4 rounded-lg border-2 border-[#b8a99a] bg-[#f2e8cf] p-6 shadow-md'>
                <div className='rounded-full bg-[#8c7851]/20 p-3 border border-[#b8a99a]'>
                  <Map className='h-6 w-6 text-[#8c7851]' />
                </div>
                <h3 className='text-xl font-bold text-[#594a3c]'>
                  Cartographer's Table
                </h3>
                <p className='text-center text-[#8c7851]'>
                  Draw detailed maps of your realms. Import existing maps or
                  craft new ones from blank parchment.
                </p>
              </div>
              <div className='flex flex-col items-center space-y-4 rounded-lg border-2 border-[#b8a99a] bg-[#f2e8cf] p-6 shadow-md'>
                <div className='rounded-full bg-[#8c7851]/20 p-3 border border-[#b8a99a]'>
                  <Users className='h-6 w-6 text-[#8c7851]' />
                </div>
                <h3 className='text-xl font-bold text-[#594a3c]'>
                  Figurine Collection
                </h3>
                <p className='text-center text-[#8c7851]'>
                  Place and move tokens representing heroes, villains, and
                  creatures across your tavern table.
                </p>
              </div>
              <div className='flex flex-col items-center space-y-4 rounded-lg border-2 border-[#b8a99a] bg-[#f2e8cf] p-6 shadow-md'>
                <div className='rounded-full bg-[#8c7851]/20 p-3 border border-[#b8a99a]'>
                  <PenTool className='h-6 w-6 text-[#8c7851]' />
                </div>
                <h3 className='text-xl font-bold text-[#594a3c]'>
                  Scribe's Quill
                </h3>
                <p className='text-center text-[#8c7851]'>
                  All changes appear instantly for everyone at the table. Edit
                  your scrolls, tales, and maps together.
                </p>
              </div>
              <div className='flex flex-col items-center space-y-4 rounded-lg border-2 border-[#b8a99a] bg-[#f2e8cf] p-6 shadow-md'>
                <div className='rounded-full bg-[#8c7851]/20 p-3 border border-[#b8a99a]'>
                  <Globe className='h-6 w-6 text-[#8c7851]' />
                </div>
                <h3 className='text-xl font-bold text-[#594a3c]'>
                  Mist of Mystery
                </h3>
                <p className='text-center text-[#8c7851]'>
                  Reveal areas of your maps as adventurers explore. Keep the
                  unknown shrouded in magical fog.
                </p>
              </div>
              <div className='flex flex-col items-center space-y-4 rounded-lg border-2 border-[#b8a99a] bg-[#f2e8cf] p-6 shadow-md'>
                <div className='rounded-full bg-[#8c7851]/20 p-3 border border-[#b8a99a]'>
                  <MessageSquare className='h-6 w-6 text-[#8c7851]' />
                </div>
                <h3 className='text-xl font-bold text-[#594a3c]'>
                  Tavern Chat
                </h3>
                <p className='text-center text-[#8c7851]'>
                  Whisper to your companions, shout across the tavern, or point
                  out interesting spots on your maps.
                </p>
              </div>
              <div className='flex flex-col items-center space-y-4 rounded-lg border-2 border-[#b8a99a] bg-[#f2e8cf] p-6 shadow-md'>
                <div className='rounded-full bg-[#8c7851]/20 p-3 border border-[#b8a99a]'>
                  <Dice5 className='h-6 w-6 text-[#8c7851]' />
                </div>
                <h3 className='text-xl font-bold text-[#594a3c]'>
                  Fortune Teller
                </h3>
                <p className='text-center text-[#8c7851]'>
                  Track who goes first in battle and roll magical dice that
                  everyone at the table can see.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section - Tavern Keeper Explaining */}
        <section
          id='how-it-works'
          className='w-full py-12 md:py-24 lg:py-32 bg-[#f2e8cf] relative'
        >
          <div
            className='absolute inset-0 pointer-events-none opacity-20'
            style={{
              backgroundImage: "url('/placeholder.svg?height=500&width=500')",
              backgroundRepeat: 'repeat',
            }}
          ></div>
          <div className='container px-4 md:px-6 relative'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-[#8c7851]/20 px-3 py-1 text-sm text-[#594a3c] border border-[#b8a99a]'>
                  Tavern Rules
                </div>
                <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#594a3c]'>
                  How to Join Our Merry Band
                </h2>
                <p className='max-w-[900px] text-[#8c7851] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Getting started at The Local Tavern is as easy as ordering an
                  ale. Follow these simple steps.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3'>
              <div className='flex flex-col items-center space-y-4 rounded-lg border-2 border-[#b8a99a] bg-[#f2e8cf] p-6 shadow-md'>
                <div className='flex h-12 w-12 items-center justify-center rounded-full bg-[#8c7851] text-xl font-bold text-[#f2e8cf] border border-[#b8a99a]'>
                  1
                </div>
                <h3 className='text-xl font-bold text-[#594a3c]'>
                  Sign the Ledger
                </h3>
                <p className='text-center text-[#8c7851]'>
                  Create your account in our guest book. No payment required for
                  a basic seat at the table.
                </p>
              </div>
              <div className='flex flex-col items-center space-y-4 rounded-lg border-2 border-[#b8a99a] bg-[#f2e8cf] p-6 shadow-md'>
                <div className='flex h-12 w-12 items-center justify-center rounded-full bg-[#8c7851] text-xl font-bold text-[#f2e8cf] border border-[#b8a99a]'>
                  2
                </div>
                <h3 className='text-xl font-bold text-[#594a3c]'>
                  Start Your Tale
                </h3>
                <p className='text-center text-[#8c7851]'>
                  Begin a new campaign, draw your maps, and invite fellow
                  adventurers to join your table.
                </p>
              </div>
              <div className='flex flex-col items-center space-y-4 rounded-lg border-2 border-[#b8a99a] bg-[#f2e8cf] p-6 shadow-md'>
                <div className='flex h-12 w-12 items-center justify-center rounded-full bg-[#8c7851] text-xl font-bold text-[#f2e8cf] border border-[#b8a99a]'>
                  3
                </div>
                <h3 className='text-xl font-bold text-[#594a3c]'>
                  Gather 'Round
                </h3>
                <p className='text-center text-[#8c7851]'>
                  Begin your adventure with friends near and far. Enjoy seamless
                  collaboration around our magical table.
                </p>
              </div>
            </div>
            <div className='mx-auto max-w-5xl'>
              <div className='relative h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden border-2 border-[#b8a99a] shadow-xl shadow-[#8c7851]/20 bg-[#e8ddc3]'>
                <Image
                  src='/placeholder.svg?height=500&width=1000'
                  width={1000}
                  height={500}
                  alt='The Local Tavern Interface'
                  className='object-cover'
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Tavern Patrons */}
        <section
          id='testimonials'
          className='w-full py-12 md:py-24 lg:py-32 bg-[#e8ddc3] relative'
        >
          <div
            className='absolute inset-0 pointer-events-none opacity-20'
            style={{
              backgroundImage: "url('/placeholder.svg?height=500&width=500')",
              backgroundRepeat: 'repeat',
            }}
          ></div>
          <div className='container px-4 md:px-6 relative'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-[#8c7851]/20 px-3 py-1 text-sm text-[#594a3c] border border-[#b8a99a]'>
                  Tavern Tales
                </div>
                <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#594a3c]'>
                  Stories From Our Regular Patrons
                </h2>
                <p className='max-w-[900px] text-[#8c7851] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Hear what adventurers and dungeon masters have to say about
                  The Local Tavern.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2'>
              <div className='flex flex-col justify-between rounded-lg border-2 border-[#b8a99a] bg-[#f2e8cf] p-6 shadow-md'>
                <div className='space-y-4'>
                  <p className='text-[#8c7851]'>
                    "The Local Tavern has transformed how I run my campaigns.
                    The map tools and token movement have made combat so much
                    more engaging for my players."
                  </p>
                </div>
                <div className='flex items-center gap-4 pt-4'>
                  <div className='h-10 w-10 rounded-full bg-[#8c7851]/20 border border-[#b8a99a] flex items-center justify-center'>
                    <span className='text-[#594a3c] font-bold'>M</span>
                  </div>
                  <div>
                    <p className='font-medium text-[#594a3c]'>
                      Marcus the Wise
                    </p>
                    <p className='text-sm text-[#8c7851]'>
                      Dungeon Master for 10+ years
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col justify-between rounded-lg border-2 border-[#b8a99a] bg-[#f2e8cf] p-6 shadow-md'>
                <div className='space-y-4'>
                  <p className='text-[#8c7851]'>
                    "The character scrolls are a blessing from the gods. No more
                    erasing holes in my parchment when my health changes for the
                    10th time in battle!"
                  </p>
                </div>
                <div className='flex items-center gap-4 pt-4'>
                  <div className='h-10 w-10 rounded-full bg-[#8c7851]/20 border border-[#b8a99a] flex items-center justify-center'>
                    <span className='text-[#594a3c] font-bold'>E</span>
                  </div>
                  <div>
                    <p className='font-medium text-[#594a3c]'>Eliza the Bard</p>
                    <p className='text-sm text-[#8c7851]'>
                      Player in 3 active campaigns
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col justify-between rounded-lg border-2 border-[#b8a99a] bg-[#f2e8cf] p-6 shadow-md'>
                <div className='space-y-4'>
                  <p className='text-[#8c7851]'>
                    "The mist of mystery has made exploration so much more
                    exciting. My players are genuinely surprised when they
                    discover new areas of the dungeon."
                  </p>
                </div>
                <div className='flex items-center gap-4 pt-4'>
                  <div className='h-10 w-10 rounded-full bg-[#8c7851]/20 border border-[#b8a99a] flex items-center justify-center'>
                    <span className='text-[#594a3c] font-bold'>D</span>
                  </div>
                  <div>
                    <p className='font-medium text-[#594a3c]'>
                      Dwarven Dungeoneer
                    </p>
                    <p className='text-sm text-[#8c7851]'>
                      DM for a party of 6
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col justify-between rounded-lg border-2 border-[#b8a99a] bg-[#f2e8cf] p-6 shadow-md'>
                <div className='space-y-4'>
                  <p className='text-[#8c7851]'>
                    "The fortune teller and dice roller have sped up our combat
                    significantly. We spend more time adventuring and less time
                    managing the game mechanics."
                  </p>
                </div>
                <div className='flex items-center gap-4 pt-4'>
                  <div className='h-10 w-10 rounded-full bg-[#8c7851]/20 border border-[#b8a99a] flex items-center justify-center'>
                    <span className='text-[#594a3c] font-bold'>R</span>
                  </div>
                  <div>
                    <p className='font-medium text-[#594a3c]'>Ranger Rick</p>
                    <p className='text-sm text-[#8c7851]'>
                      Player since D&D 3.5
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section - Run A Tab */}
        <section
          id='pricing'
          className='w-full py-12 md:py-24 lg:py-32 bg-[#f2e8cf] relative'
        >
          <div
            className='absolute inset-0 pointer-events-none opacity-20'
            style={{
              backgroundImage: "url('/placeholder.svg?height=500&width=500')",
              backgroundRepeat: 'repeat',
            }}
          ></div>
          <div className='container px-4 md:px-6 relative'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-[#8c7851]/20 px-3 py-1 text-sm text-[#594a3c] border border-[#b8a99a]'>
                  Run A Tab
                </div>
                <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#594a3c]'>
                  Choose Your Seat At The Table
                </h2>
                <p className='max-w-[900px] text-[#8c7851] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Fair prices for adventurers of all levels. All plans include a
                  fortnight's free trial.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3'>
              <div className='flex flex-col rounded-lg border-2 border-[#b8a99a] bg-[#f2e8cf] p-6 shadow-md'>
                <div className='space-y-2'>
                  <h3 className='text-2xl font-bold text-[#594a3c]'>
                    Commoner
                  </h3>
                  <p className='text-[#8c7851]'>
                    Perfect for casual players and new dungeon masters
                  </p>
                </div>
                <div className='mt-4 flex items-baseline text-3xl font-bold text-[#594a3c]'>
                  0
                  <span className='ml-1 text-base font-medium text-[#8c7851]'>
                    {' '}
                    gold pieces/moon
                  </span>
                </div>
                <ul className='mt-6 space-y-3'>
                  <li className='flex items-center'>
                    <CheckCircle className='mr-2 h-4 w-4 text-[#8c7851]' />
                    <span className='text-[#8c7851]'>1 active campaign</span>
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='mr-2 h-4 w-4 text-[#8c7851]' />
                    <span className='text-[#8c7851]'>Up to 5 adventurers</span>
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='mr-2 h-4 w-4 text-[#8c7851]' />
                    <span className='text-[#8c7851]'>Basic map tools</span>
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='mr-2 h-4 w-4 text-[#8c7851]' />
                    <span className='text-[#8c7851]'>Character scrolls</span>
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='mr-2 h-4 w-4 text-[#8c7851]' />
                    <span className='text-[#8c7851]'>Tale keeper</span>
                  </li>
                </ul>
                <Button className='mt-8 bg-[#8c7851] hover:bg-[#6e5f3d] text-[#f2e8cf] border border-[#b8a99a]'>
                  Claim Your Seat
                </Button>
              </div>
              <div className='flex flex-col rounded-lg border-2 border-[#8c7851] bg-[#f2e8cf] p-6 shadow-lg shadow-[#8c7851]/20 relative'>
                <div className='absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#8c7851] text-[#f2e8cf] px-4 py-1 rounded-full text-sm font-bold border border-[#b8a99a]'>
                  Most Popular
                </div>
                <div className='space-y-2'>
                  <h3 className='text-2xl font-bold text-[#594a3c]'>
                    Guildmaster
                  </h3>
                  <p className='text-[#8c7851]'>
                    For serious DMs running multiple campaigns
                  </p>
                </div>
                <div className='mt-4 flex items-baseline text-3xl font-bold text-[#594a3c]'>
                  10
                  <span className='ml-1 text-base font-medium text-[#8c7851]'>
                    {' '}
                    gold pieces/moon
                  </span>
                </div>
                <ul className='mt-6 space-y-3'>
                  <li className='flex items-center'>
                    <CheckCircle className='mr-2 h-4 w-4 text-[#8c7851]' />
                    <span className='text-[#8c7851]'>5 active campaigns</span>
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='mr-2 h-4 w-4 text-[#8c7851]' />
                    <span className='text-[#8c7851]'>
                      Up to 10 adventurers per campaign
                    </span>
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='mr-2 h-4 w-4 text-[#8c7851]' />
                    <span className='text-[#8c7851]'>Advanced map tools</span>
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='mr-2 h-4 w-4 text-[#8c7851]' />
                    <span className='text-[#8c7851]'>Mist of mystery</span>
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='mr-2 h-4 w-4 text-[#8c7851]' />
                    <span className='text-[#8c7851]'>Interactive objects</span>
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='mr-2 h-4 w-4 text-[#8c7851]' />
                    <span className='text-[#8c7851]'>
                      1GB storage for maps and scrolls
                    </span>
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='mr-2 h-4 w-4 text-[#8c7851]' />
                    <span className='text-[#8c7851]'>
                      Priority messenger raven
                    </span>
                  </li>
                </ul>
                <Button className='mt-8 bg-[#8c7851] hover:bg-[#6e5f3d] text-[#f2e8cf] border border-[#b8a99a]'>
                  Claim Your Seat
                </Button>
              </div>
              <div className='flex flex-col rounded-lg border-2 border-[#b8a99a] bg-[#f2e8cf] p-6 shadow-md'>
                <div className='space-y-2'>
                  <h3 className='text-2xl font-bold text-[#594a3c]'>
                    Archmage
                  </h3>
                  <p className='text-[#8c7851]'>
                    For professional DMs and large adventuring parties
                  </p>
                </div>
                <div className='mt-4 flex items-baseline text-3xl font-bold text-[#594a3c]'>
                  25
                  <span className='ml-1 text-base font-medium text-[#8c7851]'>
                    {' '}
                    gold pieces/moon
                  </span>
                </div>
                <ul className='mt-6 space-y-3'>
                  <li className='flex items-center'>
                    <CheckCircle className='mr-2 h-4 w-4 text-[#8c7851]' />
                    <span className='text-[#8c7851]'>Unlimited campaigns</span>
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='mr-2 h-4 w-4 text-[#8c7851]' />
                    <span className='text-[#8c7851]'>
                      Unlimited adventurers
                    </span>
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='mr-2 h-4 w-4 text-[#8c7851]' />
                    <span className='text-[#8c7851]'>
                      Premium map enchantments
                    </span>
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='mr-2 h-4 w-4 text-[#8c7851]' />
                    <span className='text-[#8c7851]'>Advanced DM tools</span>
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='mr-2 h-4 w-4 text-[#8c7851]' />
                    <span className='text-[#8c7851]'>
                      Custom figurine creation
                    </span>
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='mr-2 h-4 w-4 text-[#8c7851]' />
                    <span className='text-[#8c7851]'>
                      5GB storage for maps and scrolls
                    </span>
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='mr-2 h-4 w-4 text-[#8c7851]' />
                    <span className='text-[#8c7851]'>Arcane API access</span>
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='mr-2 h-4 w-4 text-[#8c7851]' />
                    <span className='text-[#8c7851]'>
                      24/7 priority messenger raven
                    </span>
                  </li>
                </ul>
                <Button className='mt-8 bg-[#8c7851] hover:bg-[#6e5f3d] text-[#f2e8cf] border border-[#b8a99a]'>
                  Claim Your Seat
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Questions at the Bar */}
        <section
          id='faq'
          className='w-full py-12 md:py-24 lg:py-32 bg-[#e8ddc3] relative'
        >
          <div
            className='absolute inset-0 pointer-events-none opacity-20'
            style={{
              backgroundImage: "url('/placeholder.svg?height=500&width=500')",
              backgroundRepeat: 'repeat',
            }}
          ></div>
          <div className='container px-4 md:px-6 relative'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-[#8c7851]/20 px-3 py-1 text-sm text-[#594a3c] border border-[#b8a99a]'>
                  Questions for the Barkeep
                </div>
                <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#594a3c]'>
                  Common Questions
                </h2>
                <p className='max-w-[900px] text-[#8c7851] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Everything you need to know about The Local Tavern.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2'>
              <div className='rounded-lg border-2 border-[#b8a99a] bg-[#f2e8cf] p-6 shadow-md'>
                <h3 className='text-xl font-bold text-[#594a3c]'>
                  Do I need to download any scrolls or potions?
                </h3>
                <p className='mt-2 text-[#8c7851]'>
                  No, The Local Tavern is entirely accessible through magical
                  scrying orbs (web browsers). You can access it from any modern
                  device.
                </p>
              </div>
              <div className='rounded-lg border-2 border-[#b8a99a] bg-[#f2e8cf] p-6 shadow-md'>
                <h3 className='text-xl font-bold text-[#594a3c]'>
                  Can I bring my existing character scrolls?
                </h3>
                <p className='mt-2 text-[#8c7851]'>
                  Yes! You can upload your parchments, and our scribes will
                  attempt to transfer the information. You can also manually
                  inscribe your character details.
                </p>
              </div>
              <div className='rounded-lg border-2 border-[#b8a99a] bg-[#f2e8cf] p-6 shadow-md'>
                <h3 className='text-xl font-bold text-[#594a3c]'>
                  How does the scribe's quill work?
                </h3>
                <p className='mt-2 text-[#8c7851]'>
                  All changes made by the DM or adventurers update instantly for
                  everyone at the table. This includes map movements, character
                  scroll updates, and tales.
                </p>
              </div>
              <div className='rounded-lg border-2 border-[#b8a99a] bg-[#f2e8cf] p-6 shadow-md'>
                <h3 className='text-xl font-bold text-[#594a3c]'>
                  Can I use my own maps?
                </h3>
                <p className='mt-2 text-[#8c7851]'>
                  You can upload your own maps in common image formats or create
                  new ones using our cartographer's table.
                </p>
              </div>
              <div className='rounded-lg border-2 border-[#b8a99a] bg-[#f2e8cf] p-6 shadow-md'>
                <h3 className='text-xl font-bold text-[#594a3c]'>
                  Is there a limit to how many adventurers can join?
                </h3>
                <p className='mt-2 text-[#8c7851]'>
                  The Commoner plan supports up to 5 adventurers per campaign.
                  The Guildmaster plan supports up to 10 adventurers per
                  campaign, and the Archmage plan has no limits.
                </p>
              </div>
              <div className='rounded-lg border-2 border-[#b8a99a] bg-[#f2e8cf] p-6 shadow-md'>
                <h3 className='text-xl font-bold text-[#594a3c]'>
                  Can I cancel my tab anytime?
                </h3>
                <p className='mt-2 text-[#8c7851]'>
                  Yes, you can close your tab at any time. Your seat will remain
                  reserved until the end of your billing cycle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section - Join the Tavern */}
        <section
          id='cta'
          className='w-full py-12 md:py-24 lg:py-32 bg-[#f2e8cf] relative'
        >
          <div
            className='absolute inset-0 pointer-events-none opacity-20'
            style={{
              backgroundImage: "url('/placeholder.svg?height=500&width=500')",
              backgroundRepeat: 'repeat',
            }}
          ></div>
          <div className='container px-4 md:px-6 relative'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#594a3c]'>
                  Ready to pull up a chair?
                </h2>
                <p className='max-w-[600px] text-[#8c7851] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Join thousands of adventurers who have found their home at The
                  Local Tavern.
                </p>
              </div>
              <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                <Button
                  size='lg'
                  className='bg-[#8c7851] hover:bg-[#6e5f3d] text-[#f2e8cf] border border-[#b8a99a]'
                >
                  Begin Your Adventure
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Button>
                <Button
                  variant='outline'
                  size='lg'
                  className='border-[#b8a99a] text-[#8c7851] hover:bg-[#e8ddc3] hover:text-[#594a3c]'
                >
                  Request a Tour
                </Button>
              </div>
              <p className='text-sm text-[#8c7851]'>
                No coin required. Free tables available forever.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Tavern Cellar */}
      <footer className='w-full border-t-2 border-[#b8a99a] bg-[#e8ddc3] py-12 relative'>
        <div
          className='absolute inset-0 pointer-events-none opacity-20'
          style={{
            backgroundImage: "url('/placeholder.svg?height=500&width=500')",
            backgroundRepeat: 'repeat',
          }}
        ></div>
        <div className='container px-4 md:px-6 relative'>
          <div className='grid gap-8 lg:grid-cols-4'>
            <div className='space-y-4'>
              <div className='flex items-center gap-2'>
                <Shield className='h-8 w-8 text-[#8c7851]' />
                <span className='text-xl font-bold text-[#594a3c]'>
                  The Local Tavern
                </span>
              </div>
              <p className='text-sm text-[#8c7851]'>
                Where adventurers gather to forge legendary campaigns, manage
                their quests, and share tales of glory around the hearth.
              </p>
              <div className='flex gap-4'>
                <Link
                  href='#'
                  className='text-[#8c7851] hover:text-[#594a3c]'
                >
                  <Twitter className='h-5 w-5' />
                  <span className='sr-only'>Twitter</span>
                </Link>
                <Link
                  href='#'
                  className='text-[#8c7851] hover:text-[#594a3c]'
                >
                  <Github className='h-5 w-5' />
                  <span className='sr-only'>GitHub</span>
                </Link>
                <Link
                  href='#'
                  className='text-[#8c7851] hover:text-[#594a3c]'
                >
                  <Crown className='h-5 w-5' />
                  <span className='sr-only'>Discord</span>
                </Link>
              </div>
            </div>
            <div className='space-y-4'>
              <h3 className='text-lg font-medium text-[#594a3c]'>
                Tavern Menu
              </h3>
              <ul className='space-y-2 text-sm'>
                <li>
                  <Link
                    href='#features'
                    className='text-[#8c7851] hover:text-[#594a3c]'
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href='#pricing'
                    className='text-[#8c7851] hover:text-[#594a3c]'
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-[#8c7851] hover:text-[#594a3c]'
                  >
                    Future Brews
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-[#8c7851] hover:text-[#594a3c]'
                  >
                    Updates
                  </Link>
                </li>
              </ul>
            </div>
            <div className='space-y-4'>
              <h3 className='text-lg font-medium text-[#594a3c]'>Resources</h3>
              <ul className='space-y-2 text-sm'>
                <li>
                  <Link
                    href='#'
                    className='text-[#8c7851] hover:text-[#594a3c]'
                  >
                    Spell Book
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-[#8c7851] hover:text-[#594a3c]'
                  >
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-[#8c7851] hover:text-[#594a3c]'
                  >
                    Bard's Tales
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-[#8c7851] hover:text-[#594a3c]'
                  >
                    Adventurer's Guild
                  </Link>
                </li>
              </ul>
            </div>
            <div className='space-y-4'>
              <h3 className='text-lg font-medium text-[#594a3c]'>
                The Proprietors
              </h3>
              <ul className='space-y-2 text-sm'>
                <li>
                  <Link
                    href='#'
                    className='text-[#8c7851] hover:text-[#594a3c]'
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-[#8c7851] hover:text-[#594a3c]'
                  >
                    Send a Raven
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-[#8c7851] hover:text-[#594a3c]'
                  >
                    Privacy Scroll
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-[#8c7851] hover:text-[#594a3c]'
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='mt-12 border-t border-[#b8a99a] pt-8 text-center text-sm text-[#8c7851]'>
            <p>
              © {new Date().getFullYear()} The Local Tavern. All rights reserved
              by royal decree.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
