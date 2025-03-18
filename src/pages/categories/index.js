import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { CategoryCard } from "@/components/category-card";
import { categories } from "@/lib/data";
import { CircularProgress, Step, StepLabel, Stepper } from "@mui/material";
import { fetchCategories, fetchSubcategories, fetchNearbyStores, fetchStoreProducts } from "@/lib/api"
import { useEffect, useState } from "react";
import CategorySelection from "@/components/CategorySelection";
import SubcategorySelection from "@/components/SubcategorySelection";
import LocationPermission from "@/components/LocationPermission";
import StoreSelection from "@/components/StoreSelection";
import ProductDisplay from "@/components/ProductDisplay";

const steps = ["Select Category", "Select Subcategory", "Find Nearby Stores", "Browse Products"]
export default function CategoriesPage() {
    // State for workflow steps
    const [activeStep, setActiveStep] = useState(0)

    // Data states
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [subcategories, setSubcategories] = useState([])
    const [selectedSubcategory, setSelectedSubcategory] = useState(null)
    const [location, setLocation] = useState(null)
    const [locationPermissionGranted, setLocationPermissionGranted] = useState(false)
    const [nearbyStores, setNearbyStores] = useState([])
    const [selectedStore, setSelectedStore] = useState(null)
    const [products, setProducts] = useState([])
  
    // UI states
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
  
    // Fetch categories on initial load
    useEffect(() => {
      const getCategories = async () => {
        setLoading(true)
        try {
          const data = await fetchCategories()
          setCategories(data)
        } catch (err) {
          setError("Failed to load categories. Please try again.")
          console.error(err)
        } finally {
          setLoading(false)
        }
      }
  
      getCategories()
    }, [])
  
    // Fetch subcategories when a category is selected
    useEffect(() => {
      if (selectedCategory) {
        const getSubcategories = async () => {
          setLoading(true)
          try {
            const data = await fetchSubcategories(selectedCategory.id)
            setSubcategories(data)
            setActiveStep(1)
          } catch (err) {
            setError("Failed to load subcategories. Please try again.")
            console.error(err)
          } finally {
            setLoading(false)
          }
        }
  
        getSubcategories()
      }
    }, [selectedCategory])
  
    // Fetch nearby stores when location is granted and subcategory is selected
    useEffect(() => {
      if (selectedSubcategory && location && locationPermissionGranted) {
        const getStores = async () => {
          setLoading(true)
          try {
            const data = await fetchNearbyStores(selectedSubcategory.id, location.latitude, location.longitude)
            setNearbyStores(data)
            setActiveStep(2)
          } catch (err) {
            setError("Failed to find nearby stores. Please try again.")
            console.error(err)
          } finally {
            setLoading(false)
          }
        }
  
        getStores()
      }
    }, [selectedSubcategory, location, locationPermissionGranted])
  
    // Fetch products when a store is selected
    useEffect(() => {
      if (selectedStore) {
        const getProducts = async () => {
          setLoading(true)
          try {
            const data = await fetchStoreProducts(selectedStore.id, selectedSubcategory.id)
            setProducts(data)
            setActiveStep(3)
          } catch (err) {
            setError("Failed to load products. Please try again.")
            console.error(err)
          } finally {
            setLoading(false)
          }
        }
  
        getProducts()
      }
    }, [selectedStore, selectedSubcategory])
  
    // Handle category selection
    const handleCategorySelect = (category) => {
      setSelectedCategory(category)
      setSelectedSubcategory(null)
      setSelectedStore(null)
      setProducts([])
    }
  
    // Handle subcategory selection
    const handleSubcategorySelect = (subcategory) => {
      setSelectedSubcategory(subcategory)
      setSelectedStore(null)
      setProducts([])
  
      // Check if location is already granted
      if (!locationPermissionGranted) {
        setActiveStep(1.5) // Show location permission step
      }
    }
  
    // Handle location permission
    const handleLocationPermission = (granted, locationData) => {
      setLocationPermissionGranted(granted)
      if (granted && locationData) {
        setLocation(locationData)
      } else {
        setError("Location permission is required to find nearby stores.")
      }
    }
  
    // Handle store selection
    const handleStoreSelect = (store) => {
      setSelectedStore(store)
    }
  
    // Handle going back to previous step
    const handleBack = () => {
      if (activeStep === 3) {
        setActiveStep(2)
        setSelectedStore(null)
        setProducts([])
      } else if (activeStep === 2) {
        setActiveStep(1)
        setSelectedSubcategory(null)
        setNearbyStores([])
      } else if (activeStep === 1.5) {
        setActiveStep(1)
        setLocationPermissionGranted(false)
      } else if (activeStep === 1) {
        setActiveStep(0)
        setSelectedCategory(null)
        setSubcategories([])
      }
    }
  
    // Render the current step
    const renderStep = () => {
      if (loading) {
        return (
          <Box display="flex" justifyContent="center" my={4}>
            <CircularProgress />
          </Box>
        )
      }
  
      if (error) {
        return (
          <Alert severity="error" sx={{ my: 2 }} onClose={() => setError(null)}>
            {error}
          </Alert>
        )
      }
  
      switch (activeStep) {
        case 0:
          return <CategorySelection categories={categories} onSelect={handleCategorySelect} />
        case 1:
          return (
            <SubcategorySelection
              subcategories={subcategories}
              onSelect={handleSubcategorySelect}
              onBack={handleBack}
              category={selectedCategory}
            />
          )
        case 1.5: // Location permission step
          return <LocationPermission onPermissionChange={handleLocationPermission} onBack={handleBack} />
        case 2:
          return (
            <StoreSelection
              stores={nearbyStores}
              onSelect={handleStoreSelect}
              onBack={handleBack}
              subcategory={selectedSubcategory}
            />
          )
        case 3:
          return (
            <ProductDisplay
              products={products}
              onBack={handleBack}
              store={selectedStore}
              subcategory={selectedSubcategory}
            />
          )
        default:
          return null
      }
    }
  return (
    <Box maxWidth="lg" mx="auto" px={2} py={4}>
      {/* <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 3 }}>
        <Typography variant="body2" color="text.primary">
          Categories
        </Typography>
      </Breadcrumbs>

      <Typography variant="h4" fontWeight={700} gutterBottom>
        All Categories
      </Typography> */}
      <Box sx={{ width: "100%", mb: 4 }}>
          <Stepper activeStep={Math.floor(activeStep)} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      {/* <Grid container spacing={3}>
        {categories.map((category) => (
          <Grid item xs={12} sm={6} lg={4} key={category.id}>
            <CategoryCard category={category} />
          </Grid>
        ))}
      </Grid> */}

      {renderStep()}
    </Box>
  );
}
