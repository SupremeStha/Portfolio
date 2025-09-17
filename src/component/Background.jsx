import React from 'react';

const Background = () => {
    return (
        <div style={styles.container}>
            {/* Dotted background pattern */}
            <div style={styles.dottedBackground}></div>

            {/* Grid overlay for extra texture */}
            <div style={styles.gridOverlay}></div>

            {/* Geometric decorative elements */}
            <div style={styles.geometric1}></div>
            <div style={styles.geometric2}></div>
            <div style={styles.geometric3}></div>
            <div style={styles.geometric4}></div>
        </div>
    );
};

const styles = {
    container: {
        position: 'fixed', // Changed to fixed
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'black',
        overflow: 'hidden',
        zIndex: -1, // Send to background
        pointerEvents: 'none', // Allow clicks to pass through
    },
    dottedBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.2,
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0, 10px 10px'
    },
    gridOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.05,
        backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
        backgroundSize: '40px 40px'
    },
    geometric1: {
        position: 'absolute',
        top: '80px',
        left: '80px',
        width: '16px',
        height: '16px',
        border: '2px solid white',
        backgroundColor: 'black',
        transform: 'rotate(45deg)'
    },
    geometric2: {
        position: 'absolute',
        bottom: '128px',
        right: '80px',
        width: '24px',
        height: '24px',
        border: '2px solid white',
        backgroundColor: 'white'
    },
    geometric3: {
        position: 'absolute',
        top: '50%',
        left: '40px',
        width: '8px',
        height: '8px',
        backgroundColor: 'white'
    },
    geometric4: {
        position: 'absolute',
        top: '25%',
        right: '25%',
        width: '12px',
        height: '12px',
        border: '1px solid white'
    }
};

export default Background;