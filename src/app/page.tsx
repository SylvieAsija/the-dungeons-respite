import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
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
import './globals.css';

export default function LandingPage() {
  return (
    <div className='flex min-h-[100dvh] flex-col bg-background text-foreground font-serif relative'>
      <div
        className='fixed inset-0 pointer-events-none z-0 opacity-30'
        style={{
          backgroundImage: "url('/placeholder.svg?height=500&width=500')",
          backgroundRepeat: 'repeat',
        }}
      ></div>

      <header className='fixed top-0 z-50 w-full border-b border-border bg-background shadow-sm'>
        <div className='container flex h-20 items-center justify-between'>
          <div className='flex items-center gap-3'>
            <div className='relative ml-6 h-12 w-12'>
              <Shield className='h-12 w-12 text-primary' />
              <div className='absolute inset-0 flex items-center justify-center pointer-events-none z-10'>
                DR
              </div>
            </div>
            <span className='text-2xl font-bold text-foreground'>
              The Dungeon's Respite
            </span>
          </div>
          <nav className='flex items-center gap-3 space-x-3 '>
            <Link
              href='#features'
              className='text-sm font-medium text-muted-foreground hover:text-foreground'
            >
              Menu
            </Link>
            <Separator
              className='h-4'
              orientation='vertical'
            />
            <Link
              href='#how-it-works'
              className='text-sm font-medium text-muted-foreground hover:text-foreground'
            >
              How It Works
            </Link>
            <Separator
              className='h-4'
              orientation='vertical'
            />
            <Link
              href='#testimonials'
              className='text-sm font-medium text-muted-foreground hover:text-foreground'
            >
              Patrons
            </Link>
            <Separator
              className='h-4'
              orientation='vertical'
            />
            <Link
              href='#pricing'
              className='text-sm font-medium text-muted-foreground hover:text-foreground'
            >
              Run A Tab
            </Link>
            <Separator
              className='h-4'
              orientation='vertical'
            />
            <Link
              href='#faq'
              className='text-sm font-medium text-muted-foreground hover:text-foreground'
            >
              Questions
            </Link>
          </nav>
          <div className='flex items-center gap-4 mr-6'>
            <Button>
              Reserve A Seat
              <ArrowRight className='ml-2 h-4 w-' />
            </Button>
          </div>
        </div>
      </header>

      <main className='mt-20 flex-1 z-10'>
        <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden'>
          <div className='container relative z-10 px-4 md:px-6'>
            <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
              <div className='flex flex-col justify-center space-y-4'>
                <div className='space-y-2'>
                  <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-foreground'>
                    Welcome to The Dungeon's Respite
                  </h1>
                  <p className='max-w-[600px] text-muted-foreground md:text-xl'>
                    Where adventurers gather to forge legendary campaigns,
                    manage their quests, and share tales of glory over a pint
                  </p>
                </div>
                <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                  <Button size='lg'>
                    Begin Your Journey
                    <ArrowRight className='ml-2 h-4 w-4' />
                  </Button>
                  <Button
                    variant='outline'
                    size='lg'
                  >
                    Explore The Tavern
                  </Button>
                </div>
                <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                  <CheckCircle className='h-4 w-4 text-primary' />
                  <span>No coin required to enter</span>
                  <CheckCircle className='ml-2 h-4 w-4 text-primary' />
                  <span>Free tables always available</span>
                  <CheckCircle className='ml-2 h-4 w-4 text-primary' />
                  <span>Leave anytime</span>
                </div>
              </div>
              {/* <div className='flex items-center justify-center'>
                <Card className='w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden shadow-xl border-2'>
                  <Image
                    src='/placeholder.svg?height=500&width=600'
                    width={600}
                    height={500}
                    alt='The Local Tavern App Screenshot'
                    className='object-cover w-full h-full'
                    priority
                  />
                </Card>
              </div> */}
            </div>
          </div>
        </section>

        <section
          id='features'
          className='w-full py-12 md:py-24 lg:py-32 bg-muted relative'
        >
          <div
            className='absolute inset-0 pointer-events-none opacity-20'
            style={{
              backgroundImage: "url('/placeholder.svg?height=500&width=500')",
              backgroundRepeat: 'repeat',
            }}
          ></div>
          <div className='container md:px-6 relative'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <Badge
                  variant='outline'
                  className='bg-primary/10 text-foreground border-primary/20'
                >
                  Our Menu
                </Badge>
                <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight text-foreground'>
                  Check out what's On Tap At The Dungeon's Respite
                </h2>
                <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Everything you need to run campaigns with your fellow
                  adventurers
                </p>
              </div>
            </div>
            <div className='grid py-12 grid-cols-2 justify-items-center gap-y-6'>
              <Card className='bg-card border-border w-5/6 ml-6'>
                <CardHeader className='flex flex-col items-center justify-center'>
                  <div className='flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-border mb-4'>
                    <Shield className='w-6 h-6 text-primary' />
                  </div>
                  <CardTitle className='text-center'>
                    Campaign Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-center text-muted-foreground'>
                    Keep track of all your adventures. Like a well-organized
                    quest log to manage information between sessions.
                  </p>
                </CardContent>
              </Card>
              <Card className='bg-card border-border w-5/6 mr-6'>
                <CardHeader className='flex flex-col items-center justify-center'>
                  <div className='flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-border mb-4'>
                    <FileText className='h-6 w-6 text-primary' />
                  </div>
                  <CardTitle>Character Sheets</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-center text-muted-foreground'>
                    Upload your character sheet or create new virtual ones.
                    Track your stats, inventory, and abilities.
                  </p>
                </CardContent>
              </Card>
              <Card className='bg-card border-border w-5/6 ml-6'>
                <CardHeader className='flex flex-col items-center justify-center'>
                  <div className='flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-border mb-4'>
                    <Map className='h-6 w-6 text-primary' />
                  </div>
                  <CardTitle>Cartographer's Table</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-center text-muted-foreground'>
                    Draw detailed maps of your realms. Import existing maps or
                    craft new ones with our custom map builder.
                  </p>
                </CardContent>
              </Card>
              <Card className='bg-card border-border w-5/6 mr-6'>
                <CardHeader className='flex flex-col items-center justify-center'>
                  <div className='flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-border mb-4'>
                    <Users className='h-6 w-6 text-primary' />
                  </div>
                  <CardTitle>Figurine Collection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-center text-muted-foreground'>
                    Place and move tokens representing adventurers, and NPC's
                    across your tavern table.
                  </p>
                </CardContent>
              </Card>
              <Card className='bg-card border-border w-5/6 ml-6'>
                <CardHeader className='flex flex-col items-center justify-center'>
                  <div className='flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-border mb-4'>
                    <PenTool className='h-6 w-6 text-primary' />
                  </div>
                  <CardTitle>Scribe's Quill</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-center text-muted-foreground'>
                    All changes appear instantly for everyone at the table. Edit
                    your character sheets, token positions, and maps together.
                  </p>
                </CardContent>
              </Card>
              <Card className='bg-card border-border w-5/6 mr-6'>
                <CardHeader className='flex flex-col items-center justify-center'>
                  <div className='flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-border mb-4'>
                    <Globe className='h-6 w-6 text-primary' />
                  </div>
                  <CardTitle>Mist of Mystery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-center text-muted-foreground'>
                    Hide and Reveal areas of your maps as adventurers explore.
                    Keep the unknown shrouded in magical fog.
                  </p>
                </CardContent>
              </Card>
              <Card className='bg-card border-border w-5/6 ml-6'>
                <CardHeader className='flex flex-col items-center justify-center'>
                  <div className='flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-border mb-4'>
                    <MessageSquare className='h-6 w-6 text-primary' />
                  </div>
                  <CardTitle>Tavern Chat</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-center text-muted-foreground'>
                    Communicate with individual party members or the entire
                    group for interactive roleplay experiences.
                  </p>
                </CardContent>
              </Card>
              <Card className='bg-card border-border w-5/6 mr-6'>
                <CardHeader className='flex flex-col items-center justify-center'>
                  <div className='flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-border mb-4'>
                    <Dice5 className='h-6 w-6 text-primary' />
                  </div>
                  <CardTitle>Fate and Fortune</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-center text-muted-foreground'>
                    Track initiative and roll virtual dice that everyone at the
                    table can see.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section - Tavern Keeper Explaining */}
        <section
          id='how-it-works'
          className='w-full py-12 md:py-24 lg:py-32 bg-background relative'
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
                <Badge
                  variant='outline'
                  className='bg-primary/10 text-foreground border-primary/20'
                >
                  Tavern Rules
                </Badge>
                <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight text-foreground'>
                  How to Join Our Merry Band
                </h2>
                <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Getting started at The Local Tavern is as easy as ordering an
                  pint. Follow these simple steps.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl gap-6 py-12 grid-cols-3'>
              <Card className='bg-card border-border'>
                <CardHeader className='flex flex-col items-center justify-center'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground border border-border mb-4'>
                    1
                  </div>
                  <CardTitle>Sign the Ledger</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-center text-muted-foreground'>
                    Create your account in our guest book. No payment required
                    for a basic seat at the table.
                  </p>
                </CardContent>
              </Card>
              <Card className='bg-card border-border'>
                <CardHeader className='flex flex-col items-center justify-center'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground border border-border mb-4'>
                    2
                  </div>
                  <CardTitle>Start Your Tale</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-center text-muted-foreground'>
                    Begin a new campaign, draw your maps, and invite fellow
                    adventurers to join your table.
                  </p>
                </CardContent>
              </Card>
              <Card className='bg-card border-border'>
                <CardHeader className='flex flex-col items-center justify-center'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground border border-border mb-4'>
                    3
                  </div>
                  <CardTitle>Gather 'Round</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-center text-muted-foreground'>
                    Begin your adventure with friends near and far. Enjoy
                    seamless collaboration around our magical table.
                  </p>
                </CardContent>
              </Card>
            </div>
            {/* <div className='mx-auto max-w-5xl mt-12'>
              <Card className='w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden shadow-xl border-2'>
                <Image
                  src='/placeholder.svg?height=500&width=1000'
                  width={1000}
                  height={500}
                  alt='The Local Tavern Interface'
                  className='object-cover w-full h-full'
                />
              </Card>
            </div> */}
          </div>
        </section>

        {/* Testimonials Section - Tavern Patrons */}
        <section
          id='testimonials'
          className='w-full py-12 md:py-24 lg:py-32 bg-muted relative'
        >
          <div>MAYBE TBD FOR IF I HAVE USER TESTIMONIALS</div>
          {/*           <div
            className='absolute inset-0 pointer-events-none opacity-20'
            style={{
              backgroundImage: "url('/placeholder.svg?height=500&width=500')",
              backgroundRepeat: 'repeat',
            }}
          ></div>
          <div className='container px-4 md:px-6 relative'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <Badge
                  variant='outline'
                  className='bg-primary/10 text-foreground border-primary/20'
                >
                  Tavern Tales
                </Badge>
                <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight text-foreground'>
                  Stories From Our Regular Patrons
                </h2>
                <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Hear what adventurers and dungeon masters have to say about
                  The Local Tavern.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2'>
              <Card className='bg-card border-border'>
                <CardContent className='pt-6'>
                  <div className='space-y-4'>
                    <p className='text-muted-foreground'>
                      "The Local Tavern has transformed how I run my campaigns.
                      The map tools and token movement have made combat so much
                      more engaging for my players."
                    </p>
                  </div>
                  <div className='flex items-center gap-4 pt-6 mt-6 border-t border-border'>
                    <div className='h-10 w-10 rounded-full bg-primary/10 border border-border flex items-center justify-center'>
                      <span className='text-foreground font-bold'>M</span>
                    </div>
                    <div>
                      <p className='font-medium text-foreground'>
                        Marcus the Wise
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        Dungeon Master for 10+ years
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className='bg-card border-border'>
                <CardContent className='pt-6'>
                  <div className='space-y-4'>
                    <p className='text-muted-foreground'>
                      "The character scrolls are a blessing from the gods. No
                      more erasing holes in my parchment when my health changes
                      for the 10th time in battle!"
                    </p>
                  </div>
                  <div className='flex items-center gap-4 pt-6 mt-6 border-t border-border'>
                    <div className='h-10 w-10 rounded-full bg-primary/10 border border-border flex items-center justify-center'>
                      <span className='text-foreground font-bold'>E</span>
                    </div>
                    <div>
                      <p className='font-medium text-foreground'>
                        Eliza the Bard
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        Player in 3 active campaigns
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className='bg-card border-border'>
                <CardContent className='pt-6'>
                  <div className='space-y-4'>
                    <p className='text-muted-foreground'>
                      "The mist of mystery has made exploration so much more
                      exciting. My players are genuinely surprised when they
                      discover new areas of the dungeon."
                    </p>
                  </div>
                  <div className='flex items-center gap-4 pt-6 mt-6 border-t border-border'>
                    <div className='h-10 w-10 rounded-full bg-primary/10 border border-border flex items-center justify-center'>
                      <span className='text-foreground font-bold'>D</span>
                    </div>
                    <div>
                      <p className='font-medium text-foreground'>
                        Dwarven Dungeoneer
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        DM for a party of 6
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className='bg-card border-border'>
                <CardContent className='pt-6'>
                  <div className='space-y-4'>
                    <p className='text-muted-foreground'>
                      "The fortune teller and dice roller have sped up our
                      combat significantly. We spend more time adventuring and
                      less time managing the game mechanics."
                    </p>
                  </div>
                  <div className='flex items-center gap-4 pt-6 mt-6 border-t border-border'>
                    <div className='h-10 w-10 rounded-full bg-primary/10 border border-border flex items-center justify-center'>
                      <span className='text-foreground font-bold'>R</span>
                    </div>
                    <div>
                      <p className='font-medium text-foreground'>Ranger Rick</p>
                      <p className='text-sm text-muted-foreground'>
                        Player since D&D 3.5
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div> */}
        </section>

        {/* Pricing Section - Run A Tab */}
        <section
          id='pricing'
          className='w-full py-12 md:py-24 lg:py-32 bg-background relative'
        >
          <div>TBD FOR WHEN I EVENTUALLY HAVE SOME MINOR MONETIZATION</div>
          {/* <div
            className='absolute inset-0 pointer-events-none opacity-20'
            style={{
              backgroundImage: "url('/placeholder.svg?height=500&width=500')",
              backgroundRepeat: 'repeat',
            }}
          ></div>
          <div className='container px-4 md:px-6 relative'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <Badge
                  variant='outline'
                  className='bg-primary/10 text-foreground border-primary/20'
                >
                  Run A Tab
                </Badge>
                <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight text-foreground'>
                  Choose Your Seat At The Table
                </h2>
                <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Fair prices for adventurers of all levels. All plans include a
                  fortnight's free trial.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3'>
              <Card className='bg-card border-border'>
                <CardHeader>
                  <CardTitle>Commoner</CardTitle>
                  <CardDescription>
                    Perfect for casual players and new dungeon masters
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='mt-4 flex items-baseline text-3xl font-bold text-foreground'>
                    0
                    <span className='ml-1 text-base font-medium text-muted-foreground'>
                      {' '}
                      gold pieces/moon
                    </span>
                  </div>
                  <ul className='mt-6 space-y-3'>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-primary' />
                      <span className='text-muted-foreground'>
                        1 active campaign
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-primary' />
                      <span className='text-muted-foreground'>
                        Up to 5 adventurers
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-primary' />
                      <span className='text-muted-foreground'>
                        Basic map tools
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-primary' />
                      <span className='text-muted-foreground'>
                        Character scrolls
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-primary' />
                      <span className='text-muted-foreground'>Tale keeper</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className='w-full'>Claim Your Seat</Button>
                </CardFooter>
              </Card>
              <Card className='bg-card border-primary relative'>
                <div className='absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold'>
                  Most Popular
                </div>
                <CardHeader>
                  <CardTitle>Guildmaster</CardTitle>
                  <CardDescription>
                    For serious DMs running multiple campaigns
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='mt-4 flex items-baseline text-3xl font-bold text-foreground'>
                    10
                    <span className='ml-1 text-base font-medium text-muted-foreground'>
                      {' '}
                      gold pieces/moon
                    </span>
                  </div>
                  <ul className='mt-6 space-y-3'>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-primary' />
                      <span className='text-muted-foreground'>
                        5 active campaigns
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-primary' />
                      <span className='text-muted-foreground'>
                        Up to 10 adventurers per campaign
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-primary' />
                      <span className='text-muted-foreground'>
                        Advanced map tools
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-primary' />
                      <span className='text-muted-foreground'>
                        Mist of mystery
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-primary' />
                      <span className='text-muted-foreground'>
                        Interactive objects
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-primary' />
                      <span className='text-muted-foreground'>
                        1GB storage for maps and scrolls
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-primary' />
                      <span className='text-muted-foreground'>
                        Priority messenger raven
                      </span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className='w-full'>Claim Your Seat</Button>
                </CardFooter>
              </Card>
              <Card className='bg-card border-border'>
                <CardHeader>
                  <CardTitle>Archmage</CardTitle>
                  <CardDescription>
                    For professional DMs and large adventuring parties
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='mt-4 flex items-baseline text-3xl font-bold text-foreground'>
                    25
                    <span className='ml-1 text-base font-medium text-muted-foreground'>
                      {' '}
                      gold pieces/moon
                    </span>
                  </div>
                  <ul className='mt-6 space-y-3'>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-primary' />
                      <span className='text-muted-foreground'>
                        Unlimited campaigns
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-primary' />
                      <span className='text-muted-foreground'>
                        Unlimited adventurers
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-primary' />
                      <span className='text-muted-foreground'>
                        Premium map enchantments
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-primary' />
                      <span className='text-muted-foreground'>
                        Advanced DM tools
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-primary' />
                      <span className='text-muted-foreground'>
                        Custom figurine creation
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-primary' />
                      <span className='text-muted-foreground'>
                        5GB storage for maps and scrolls
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-primary' />
                      <span className='text-muted-foreground'>
                        Arcane API access
                      </span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-primary' />
                      <span className='text-muted-foreground'>
                        24/7 priority messenger raven
                      </span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className='w-full'>Claim Your Seat</Button>
                </CardFooter>
              </Card>
            </div>
          </div> */}
        </section>

        {/* FAQ Section - Questions at the Bar */}
        <section
          id='faq'
          className='w-full py-12 md:py-24 lg:py-32 bg-muted relative'
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
                <Badge
                  variant='outline'
                  className='bg-primary/10 text-foreground border-primary/20'
                >
                  Questions for the Barkeep
                </Badge>
                <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight text-foreground'>
                  Common Questions (these are kinda just placeholders)
                </h2>
                <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Everything you need to know about The Dungeon's Respite.
                </p>
              </div>
            </div>
            <div className='mx-auto max-w-5xl py-12'>
              <Accordion
                type='single'
                collapsible
                className='w-full'
              >
                <AccordionItem value='item-1'>
                  <AccordionTrigger>
                    Do I need to download anything?
                  </AccordionTrigger>
                  <AccordionContent>
                    No, The Dungeon's Respite is entirely accessible through
                    your web browser. You can access it from any modern device.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                  <AccordionTrigger>
                    Can I bring my existing character sheet?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes! You can upload your character sheet, and our scribes
                    will attempt to transfer the information. You can also
                    manually inscribe your character details if not everything
                    is able to be transferred.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-3'>
                  <AccordionTrigger>
                    How does the Scribe's Quill work?
                  </AccordionTrigger>
                  <AccordionContent>
                    All changes made by the DM or adventurers update instantly
                    for everyone at the table. This includes map movements,
                    character sheet updates, and the Mist of Mystery.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-4'>
                  <AccordionTrigger>Can I use my own maps?</AccordionTrigger>
                  <AccordionContent>
                    You can upload your own maps in common image formats or
                    create new ones using our Cartographer's Table.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-5'>
                  <AccordionTrigger>
                    Is there a limit to how many adventurers can join?
                  </AccordionTrigger>
                  <AccordionContent>
                    TBD ONCE I FIGURE OUT HOW MUCH HOSTING COSTS AND HOW MANY
                    PEOPLE ARE ACTUALLY GONNA USE THIS
                    {/* The Commoner plan supports up to 5 adventurers per campaign.
                    The Guildmaster plan supports up to 10 adventurers per
                    campaign, and the Archmage plan has no limits. */}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-6'>
                  <AccordionTrigger>
                    Can I cancel my tab anytime? (for eventual monetization)
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, you can close your tab at any time. Your seat will
                    remain reserved until the end of your billing cycle.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section - Join the Tavern */}
        <section
          id='cta'
          className='w-full py-12 md:py-24 lg:py-32 bg-background relative'
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
                <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight text-foreground'>
                  Ready to pull up a chair?
                </h2>
                <p className='max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Join our merry band of adventurers who have found their home
                  at The Dungeon's Respite!
                </p>
              </div>
              <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                <Button size='lg'>
                  Begin Your Adventure
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Button>
                <Button
                  variant='outline'
                  size='lg'
                >
                  Request a Tour
                </Button>
              </div>
              <p className='text-sm text-muted-foreground'>
                No coin required. Free tables available forever.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Tavern Cellar */}
      <footer className='w-full border-t border-border bg-muted py-12 relative'>
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
                <div className='flex items-center gap-3'>
                  <div className='relative ml-2 h-12 w-12'>
                    <Shield className='h-12 w-12 text-primary' />
                    <div className='absolute inset-0 flex items-center justify-center pointer-events-none z-10'>
                      DR
                    </div>
                  </div>
                </div>
                <span className='text-xl font-bold text-foreground'>
                  The Dungeon's Respite
                </span>
              </div>
              <p className='text-sm text-muted-foreground'>
                Where adventurers gather to forge legendary campaigns, manage
                their quests, and share tales of glory over a pint
              </p>
              <div className='flex gap-4'>
                <Link
                  href='https://github.com/SylvieAsija/the-dungeons-respite'
                  className='text-muted-foreground hover:text-foreground'
                >
                  <Github className='h-5 w-5' />
                  <span className='sr-only'>GitHub</span>
                </Link>
                {/* <Link
                  href=''
                  className='text-muted-foreground hover:text-foreground'
                >
                  <Crown className='h-5 w-5' />
                  <span className='sr-only'>Discord</span>
                </Link> */}
              </div>
            </div>
            <div className='grid grid-cols-3'>
              <div className='space-y-4'>
                <h3 className='text-lg font-medium text-foreground'>
                  Tavern Menu
                </h3>
                <ul className='space-y-2 text-sm'>
                  <li>
                    <Link
                      href='#features'
                      className='text-muted-foreground hover:text-foreground'
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#pricing'
                      className='text-muted-foreground hover:text-foreground'
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='text-muted-foreground hover:text-foreground'
                    >
                      Future Brews
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='text-muted-foreground hover:text-foreground'
                    >
                      Updates
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='space-y-4'>
                <h3 className='text-lg font-medium text-foreground'>
                  Resources
                </h3>
                <ul className='space-y-2 text-sm'>
                  <li>
                    <Link
                      href='#'
                      className='text-muted-foreground hover:text-foreground'
                    >
                      Spell Book
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='text-muted-foreground hover:text-foreground'
                    >
                      Tutorials
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='text-muted-foreground hover:text-foreground'
                    >
                      Bard's Tales
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='text-muted-foreground hover:text-foreground'
                    >
                      Adventurer's Guild
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='space-y-4'>
                <h3 className='text-lg font-medium text-foreground'>
                  The Proprietors
                </h3>
                <ul className='space-y-2 text-sm'>
                  <li>
                    <Link
                      href='#'
                      className='text-muted-foreground hover:text-foreground'
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='text-muted-foreground hover:text-foreground'
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='text-muted-foreground hover:text-foreground'
                    >
                      Privacy Scroll
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='text-muted-foreground hover:text-foreground'
                    >
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Separator className='my-8' />
          <div className='text-center text-sm text-muted-foreground'>
            <p>{new Date().getFullYear()} The Dungeon's Respite</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
