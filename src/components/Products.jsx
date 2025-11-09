import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion } from 'motion/react'

const Products = () => {
  const productsData = [
    {
      title: 'E-Commerce Solutions',
      description: 'Full-featured online stores with payment integration, inventory management, and analytics.',
      image: assets.work_mobile_app,
      features: ['Payment Gateway', 'Inventory System', 'Analytics Dashboard']
    },
    {
      title: 'Business Websites',
      description: 'Professional websites designed to showcase your business and attract customers.',
      image: assets.work_dashboard_management,
      features: ['Responsive Design', 'SEO Optimized', 'CMS Integration']
    },
    {
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps for iOS and Android.',
      image: assets.work_fitness_app,
      features: ['Cross-Platform', 'Push Notifications', 'Offline Support']
    },
    {
      title: 'Custom Software',
      description: 'Tailored software solutions to meet your specific business needs.',
      image: assets.hero_img,
      features: ['Custom Features', 'Scalable Architecture', 'API Integration']
    },
    {
      title: 'SaaS Products',
      description: 'Cloud-based software as a service solutions for modern businesses.',
      image: assets.bgImage1,
      features: ['Cloud Hosting', 'Auto Updates', 'Multi-tenancy']
    },
    {
      title: 'Digital Marketing Tools',
      description: 'Marketing automation and analytics tools to grow your business.',
      image: assets.bgImage2,
      features: ['Social Media Management', 'Email Marketing', 'Analytics']
    }
  ]

  return (
    <div className='min-h-screen dark:bg-black bg-white'>
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        id='products' 
        className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 pb-20 text-gray-700 dark:text-white'
      >
        <Title 
          title='Our Products' 
          desc='Explore our range of digital solutions designed to transform your business and drive growth.'
        />

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl'>
          {productsData.map((product, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={index} 
              className='group bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-102 transition-all duration-400 overflow-hidden'
            >
              <div className='h-48 overflow-hidden'>
                <img 
                  src={product.image} 
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' 
                  alt={product.title} 
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold mb-3'>{product.title}</h3>
                <p className='text-sm opacity-70 mb-4'>{product.description}</p>
                <div className='space-y-2'>
                  <h4 className='text-sm font-semibold'>Key Features:</h4>
                  <ul className='space-y-1'>
                    {product.features.map((feature, idx) => (
                      <li key={idx} className='text-xs opacity-60 flex items-center gap-2'>
                        <span className='w-1.5 h-1.5 rounded-full bg-primary'></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className='mt-4 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#5044E5] to-[#4d8cea] text-white text-sm px-6 py-2 rounded-full hover:scale-105 transition-all'>
                  Learn More
                  <img src={assets.arrow_icon} width={14} alt="" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className='mt-10 text-center max-w-2xl'
        >
          <h3 className='text-2xl font-bold mb-4'>Need a Custom Solution?</h3>
          <p className='text-sm opacity-70 mb-6'>
            We specialize in creating tailored solutions for your unique business needs. 
            Let's discuss how we can help you achieve your goals.
          </p>
          <a href='#contact-us'>
            <button className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea] text-white px-8 py-3 rounded-full hover:scale-105 transition-all'>
              Get in Touch
            </button>
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Products
