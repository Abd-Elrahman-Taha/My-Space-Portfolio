"use client";

import React, { useState, useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = (props: any) => {
    const ref: any = useRef();
    
    // تحسين 1: تقليل عدد النجوم للموبايل لتوفير الرامات
    const sphere = useMemo(() => {
        // نتحقق إذا كان الكود يعمل في المتصفح وإذا كانت الشاشة صغيرة
        const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
        const count = isMobile ? 1500 : 5000; // 1500 نجمة للموبايل كافية جداً
        return random.inSphere(new Float32Array(count), { radius: 1.2 });
    }, []);

    useFrame((state, delta) => {
        // تحسين 2: حماية من الأخطاء إذا لم يكن الـ ref جاهزاً
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
                ref={ref}
                positions={sphere}
                stride={3}
                frustumCulled
                {...props}
            >
                <PointMaterial
                    transparent
                    color="#fff" // تصحيح الخطأ من $fff إلى #fff
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false} // تصحيح الخطأ الإملائي من dethWrite إلى depthWrite
                />
            </Points>
        </group>
    );
};

const StarsCanvas = () => (
    <div className="w-full h-auto fixed inset-0 z-[20] pointer-events-none">
        {/* تحسين 3: إضافة dpr لتقليل جودة الرندر على الشاشات العالية لتخفيف الحمل */}
        <Canvas 
            camera={{ position: [0, 0, 1] }}
            gl={{ antialias: false, powerPreference: "high-performance" }}
            dpr={[1, 1.5]} // يمنع الرندر بجودة 3x و 4x المرهقة للموبايل
        >
            <Suspense fallback={null}>
                <StarBackground />
            </Suspense>
        </Canvas>
    </div>
);

export default StarsCanvas;