import { Button } from "@/components/ui/button";
import { PlaceholderImageStatic } from "@/components/utils/PlaceholderImageStatic";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { 
  ChefHat, 
  ShoppingCart, 
  Clock, 
  ListTodo, 
  Settings, 
  Calendar,
  ArrowRight,
  HelpCircle,
  UtensilsCrossed,
  Wallet,
  Leaf
} from "lucide-react";
import Image from "next/image";

export default function LandingPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="container px-4 py-24 mx-auto text-center">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Plan Your Week, Save Your Time
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            Simplify your meals and grocery shopping with a smart planner tailored to your lifestyle.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Button size="lg" className="gap-2">
              Get Started <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              Learn More <HelpCircle className="w-4 h-4" />
            </Button>
          </div>
          <div className="mt-16">
          <Image 
  src="/banner.png"
  alt="Hero image showing meal planning" 
  width={1200} 
  height={600} 
  className="mx-auto"
/>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-24 bg-slate-50">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Meal Planning is Stressful and Time-Consuming
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Forget last-minute dinner decisions and chaotic grocery runs.
            </p>
            
            <div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-3">
              {[
                {
                  title: "What's for Dinner?",
                  description: "Struggle to decide what to cook daily.",
                  icon: UtensilsCrossed,
                },
                {
                  title: "Inefficient Shopping",
                  description: "Wasting time and forgetting essential items.",
                  icon: ShoppingCart,
                },
                {
                  title: "Unused Ingredients",
                  description: "Ingredients expire before you use them.",
                  icon: Leaf,
                }
              ].map((item, index) => (
                <div key={index} className="p-6 bg-white rounded-lg shadow-sm">
                  <div className="flex justify-center mb-6">
                    <div className="p-3 rounded-full bg-primary/10">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-24">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Take Control of Your Week
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Effortlessly plan meals, create efficient grocery lists, and enjoy stress-free cooking.
            </p>

            <div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-3">
              {[
                {
                  title: "Time-Saving",
                  description: "A weekly plan ready in minutes.",
                  icon: Clock,
                },
                {
                  title: "Smart Grocery Lists",
                  description: "Shop fast with tailored lists.",
                  icon: ListTodo,
                },
                {
                  title: "Flexible Options",
                  description: "Adjust meals for changing schedules.",
                  icon: Settings,
                }
              ].map((item, index) => (
                <div key={index} className="p-6 bg-slate-50 rounded-lg">
                  <div className="flex justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-slate-50">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Process</h2>
            <div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-3">
              {[
                {
                  title: "Sign Up and Set Preferences",
                  description: "Choose your meal preferences and dietary needs.",
                  icon: ChefHat,
                },
                {
                  title: "Get Your Weekly Plan",
                  description: "A balanced meal plan is generated for you.",
                  icon: Calendar,
                },
                {
                  title: "Shop and Cook with Ease",
                  description: "Follow the plan, use the grocery list, and enjoy stress-free meals.",
                  icon: ShoppingCart,
                }
              ].map((item, index) => (
                <div key={index} className="relative p-6">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white bg-primary rounded-full">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold text-center sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto mt-16 space-y-8">
              {[
                {
                  question: "Can I adjust the number of meals or servings?",
                  answer: "Yes, you can customize your plan for any number of people.",
                  icon: Settings,
                },
                {
                  question: "What if I don't like certain meals?",
                  answer: "Swap them out with ease – the planner adapts to your preferences.",
                  icon: UtensilsCrossed,
                },
                {
                  question: "Does the app include recipes?",
                  answer: "Yes, all meals come with easy-to-follow recipes.",
                  icon: ChefHat,
                },
                {
                  question: "Can I use it as a single person?",
                  answer: "Absolutely! Adjust servings and enjoy the same benefits.",
                  icon: Calendar,
                },
                {
                  question: "Is it available on all devices?",
                  answer: "Yes, the app works seamlessly on mobile and desktop.",
                  icon: Wallet,
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 p-6 bg-slate-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.question}</h3>
                    <p className="mt-2 text-muted-foreground">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-slate-50">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to Simplify Your Meal Planning?
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Join thousands of happy couples who have transformed their weekly routine.
            </p>
            <Button size="lg" className="mt-8 gap-2">
              Get Started Now <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
